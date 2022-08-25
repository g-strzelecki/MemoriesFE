import { createContext } from 'react';
import { PostEntity } from '../../../memories-back/types/post';
import { AuthCredential } from '../utils/AuthCredential';

interface PostsContextType {
  post: PostEntity | null;
  setPost: (post: PostEntity | null) => void;
  posts: PostEntity[] | null;
  setPosts: (posts: PostEntity[] | null) => void;
  search: string;
  setSearch: (s: string) => void;
  user: AuthCredential | null;
  setUser: (o: AuthCredential | null) => void;
}

export const DataContext = createContext<PostsContextType>(null!);
