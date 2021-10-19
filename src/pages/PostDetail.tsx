import React, { useEffect } from 'react';
import HighlightedPost from '../components/posts/HighlightedPost';
import { useParams } from 'react-router';
import { getSinglePost } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';

const PostDetail = () => {
  const params = useParams<{ postId: string }>();
  const { postId } = params;

  const {
    sendRequest,
    status,
    data: loadedPost,
    error,
  } = useHttp(getSinglePost, true);

  useEffect(() => {
    sendRequest(postId);
  }, [sendRequest, postId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedPost.text) {
    return <p>No Post found!</p>;
  }

  return (
    <HighlightedPost
      text={loadedPost.text}
      author={loadedPost.author.username}
    />
  );
};

export default PostDetail;
