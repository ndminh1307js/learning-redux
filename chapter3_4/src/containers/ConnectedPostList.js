import { connect } from 'react-redux';
import { PostList } from '../components/PostList';

const mapStateToProps = (state, props) => ({
  postData: state.postData
});

export const ConnectedPostList = connect(mapStateToProps)(PostList);