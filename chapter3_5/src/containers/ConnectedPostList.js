import { connect } from 'react-redux';
import { PostList } from '../components/PostList';

const mapStateToProps = (state, props) => {
  const filteredPosts = state.filter !== 'all'
    ? state.posts.filter(p => p.category === state.filter)
    : state.posts;
  console.log(filteredPosts);

  return {
    posts: filteredPosts.map(p => {
      const { user, ...rest } = p;
      const userObj = state.users.find(u => u.username === user);
      return {
        user: userObj,
        ...rest
      }
    })
  }
}

export const ConnectedPostList = connect(mapStateToProps)(PostList);