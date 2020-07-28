import {Book} from '../data/Book';

export interface BookRepository {
  getBooks(): Promise<Book[]>;
  getBook(): Book;
}
