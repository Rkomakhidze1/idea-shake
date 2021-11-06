import React from 'react';
import { useHistory } from 'react-router';
import NoPostFound from '../components/posts/NoPostFound';
import PostForm from '../components/posts/PostForm';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { addPost } from '../lib/api';
import { Post } from '../types';

const NewPost = () => {
  const {
    sendRequest,
    status,
    data: loadedPosts,
    error,
  } = useHttp<Post>(addPost);
  const history = useHistory();

  const handleSubmit = async (payload: { author?: string; text?: string }) => {
    const newPost = await sendRequest(payload);
    console.log(newPost);
    history.push('/');
  };

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

  return <PostForm onAddPost={handleSubmit} />;
};

export default NewPost;
