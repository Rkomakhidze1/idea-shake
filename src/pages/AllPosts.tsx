import { useEffect } from 'react';
import NoPostFound from '../components/posts/NoPostFound';
import PostList from '../components/posts/PostList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllPosts } from '../lib/api';
import { login } from '../store/auth';

const AllPosts = () => {
  const {
    sendRequest,
    status,
    data: loadedPosts,
    error,
  } = useHttp(getAllPosts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    console.log(error);
    return <p className="centered focused">{error}</p>;
  }

  if (status === 'completed' && (!loadedPosts || loadedPosts.length === 0)) {
    return <NoPostFound />;
  }

  return <PostList posts={loadedPosts} />;
};

export default AllPosts;
