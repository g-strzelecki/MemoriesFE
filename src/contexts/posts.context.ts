import { createContext } from 'react';
import { PostEntity, SimplePostEntity } from '../../../memories-back/types/post';

interface PostsContextType {
  post: PostEntity | null;
  setPost: (post: PostEntity | null) => void;
  posts: PostEntity[] | null;
  setPosts: (posts: PostEntity[] | null) => void;
  search: string;
  setSearch: (s: string) => void;
}

export const DataContext = createContext<PostsContextType>(null!);
