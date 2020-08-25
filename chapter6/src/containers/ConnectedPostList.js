import { connect } from 'react-redux';
import { PostList } from '../components/PostList';

const mapStateToProps = (state, props) => {
  const filteredPosts = state.filter !== 'all'
    ? state.posts.filter(p => p.category === state.filter)
    : state.posts;
  console.log(filteredPosts);

  const isLoading = Object.keys(state.loading).reduce((result, requestName) => {
    if (result === true) {
      return true;
    }

    if (state.loading[requestName] > 0) {
      return true;
    }
    return false;
  }, false);

  return {
    posts: filteredPosts.map(p => {
      const { user, ...rest } = p;
      const userObj = state.users.find(u => u.username === user);
      return {
        user: userObj,
        ...rest
      }
    }),
    isLoading
  }
}

export const ConnectedPostList = connect(mapStateToProps)(PostList);