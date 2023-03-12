// @types.book.tsx
import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
}

export interface Ibook {
  id?: number;
  title: string;
  author: string;
  img: string;
  category: string;
  description: string;
  price?: number;
  status?: boolean;
}

export interface Isearch {
  input: string
}

export type BookContextType = {
  books: Ibook[];
  saveBook: (book: Ibook) => void;
  updateBook: (id: number) => void;
  searchBook: (input: string) => void;
  bookCategory: (category: string) => void;
};