import PostList from '../components/posts/PostList';
import { data } from '../dummy-data';

const AllPosts = () => {
  return <PostList Posts={data} />;
};

export default AllPosts;
