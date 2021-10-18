import { Post } from '../types';

const DOMAIN = 'http://localhost:3000';

export const getAllPosts = async () => {
  const response = await fetch(`${DOMAIN}/posts`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch posts.');
  }

  return data as Post[];
};

export const getSinglePost = async (postId: string) => {
  const response = await fetch(`${DOMAIN}/posts/${postId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch Post.');
  }

  return data as Post;
};
