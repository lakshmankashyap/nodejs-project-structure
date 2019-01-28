import { IBookService } from "./interfaces/book.service";
import { BookRepository } from "../../dataAccess";
import { IBookViewModel } from "../../../shared/viewModels";

export class BookService implements IBookService {
    public async add(book: IBookViewModel): Promise<{ errorMessage: string, book: IBookViewModel }> {
        let newBook = new BookRepository(book);
        try {
            var result = await newBook.save();

            if (result.errors) {
                return {
                    book: null,
                    errorMessage: 'Error on the server.'
                };
            }
            return {
                book: book,
                errorMessage: result.errors
            };
        } catch (error) {
            //logging
            return {
                book: null,
                errorMessage:  error._message || 'Sorry something went wrong.'
            };
        }
    }
}