import React, { useEffect } from 'react';
import HighlightedPost from '../components/posts/HighlightedPost';
import { Route, useParams, useRouteMatch } from 'react-router';
import { getSinglePost } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { Post } from '../types';
import { Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const PostDetail = () => {
  const match = useRouteMatch();
  const params = useParams<{ postId: string }>();
  const { postId } = params;

  const {
    sendRequest,
    status,
    data: loadedPost,
    error,
  } = useHttp<Post>(getSinglePost, true);

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
    <>
      <HighlightedPost
        text={loadedPost.text}
        author={loadedPost.author.username}
      />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default PostDetail;
