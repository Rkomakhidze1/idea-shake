import PostList from '../components/posts/PostList';
import { data } from '../dummy-data';

const AllPosts = () => {
  return <PostList posts={data} />;
};

export default AllPosts;
