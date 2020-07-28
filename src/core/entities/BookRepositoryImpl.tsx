import {Book} from './Book';
import {BookRepository} from './BookRepository';

class BookDTO {
  pages: number = 0;
  title: string = '';
}

export class BookRepositoryImpl implements BookRepository {
  jsonUrl = '...';

  async getBooks(): Promise<Book[]> {
    const res = await fetch(this.jsonUrl);
    const jsonData = await res.json();
    //this mapping can be moved to a separate file if this gets complex just to keep the impl layer clean
    return jsonData.map((book: BookDTO) => new Book(book.pages, book.title));
  }

  getBook(): Book {
    return new Book(123, 'Harry Potter');
  }
}
