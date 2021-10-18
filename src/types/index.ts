export interface Post {
  id: number;
  text: string;
  author: {
    id: number;
    username: string;
  };
}
