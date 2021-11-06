export interface Post {
  id: number;
  text: string;
  author: {
    id: number;
    username: string;
  };
}
export interface Comment {
  id: number;
  message: string;
  author: {
    id: number;
    username: string;
  };
}
