import React from 'react';
import { data } from '../dummy-data';
import HighlightedPost from '../components/posts/HighlightedPost';

const PostDetail = () => {
  return <HighlightedPost text={data[0].text} author={data[0].author} />;
};

export default PostDetail;
