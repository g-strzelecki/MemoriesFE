import { createContext } from 'react';
import { PostEntity } from '../../../memories-back/types/post';

interface PostsContextType {
  post: PostEntity | null;
  setPost: (post: PostEntity | null) => void;
  posts: PostEntity[] | null;
  setPosts: (posts: PostEntity[] | null) => void;
}

export const DataContext = createContext<PostsContextType>(null!);
