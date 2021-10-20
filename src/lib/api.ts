import { Post } from '../types';

const DOMAIN = 'http://localhost:3000';
const token = localStorage.getItem('token');

export const getAllPosts = async () => {
  const response = await fetch(`${DOMAIN}/posts`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch posts.');
  }

  return data as Post[];
};

export const getSinglePost = async (postId: string) => {
  const response = await fetch(`${DOMAIN}/posts/${postId}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch Post.');
  }

  return data as Post;
};

export async function addPost(postData: { username: string; text: string }) {
  const response = await fetch(`${DOMAIN}/posts`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create post.');
  }

  return data;
}

export const signin = async (payload: {
  username?: string;
  password?: string;
}) => {
  const response = await fetch(`${DOMAIN}/auth/signin`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong.');
  }

  return data as Post;
};
