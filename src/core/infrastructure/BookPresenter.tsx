import {BookServiceImpl} from '../usecases/UserService';
import {BookRepositoryImpl} from '../entities/BookRepositoryImpl';

function getSampleBookData() {
  let bookRepository = new BookRepositoryImpl();
  let bookService = new BookServiceImpl(bookRepository);
  return bookService.getSampleBook();
}

export default getSampleBookData;
