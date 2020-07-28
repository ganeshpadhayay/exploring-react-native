import {BookServiceImpl} from '../domain/BookUseCases';
import {BookRepositoryImpl} from '../data/BookRepositoryImpl';

function getSampleBookData() {
  let bookRepository = new BookRepositoryImpl();
  let bookService = new BookServiceImpl(bookRepository);
  return bookService.getSampleBook();
}

export default getSampleBookData;
