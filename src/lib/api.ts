const DOMAIN = 'http://localhost:3000';

export async function getAllPosts() {
  const response = await fetch(`${DOMAIN}/posts`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch posts.');
  }

  return data;
}
