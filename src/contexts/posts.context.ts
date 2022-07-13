import { createContext } from 'react';
import { PostEntity } from '../../../memories-back/types/post';

interface PostContextType {
  posts: PostEntity[] | null;
  setPosts: (posts: PostEntity[] | null) => void;
}

export const DataContext = createContext<PostContextType>(null!);
