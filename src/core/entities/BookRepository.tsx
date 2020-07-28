import {Book} from './Book';

export interface BookRepository {
  getBooks(): Promise<Book[]>;
  getBook(): Book;
}
