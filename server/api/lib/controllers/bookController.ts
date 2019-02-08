import { Request, Response } from 'express';
import { RequestModel } from '../middlewares/authMiddleware'
import { BookRepository } from '../../../dataAccess';
import { IBookService } from '../../../businessLogic/services/interfaces/book.service';
import { BookService } from '../../../businessLogic';
import { ConvertTypeHelper } from '../../../businessLogic/helpers';
import { IBookViewModel } from '../../../../shared/viewModels';
interface GetByIdBookParams {
    bookId: number;
}

interface DeleteBookParams {
    bookId: number;
}

interface UpdateBookParams {
    bookId: number;
}

export class BookController {
    constructor() {

    }

    public get(req: RequestModel<{ authorId: string }>, res: Response) {
        var bookService = new BookService();
        bookService.get().then(data => {
            console.log("++++++++")
        })
    }

    public getById(req: RequestModel<GetByIdBookParams>, res: Response) {
        BookRepository.findById(req.params.bookId, (err, book) => {
            if (err) return res.status(500).send('Error on the server.');
            res.json(book);
        });
    }

    public add(req: RequestModel<{ book: IBookViewModel }>, res: Response) {
        var bookService = new BookService();
        //req.body
        bookService.add(req.body.book).then(data => {
            if (data.errorMessage) {
                return res.status(500).send(data.errorMessage);
            }
            res.json(data.book);
        });
    }

    public update(req: RequestModel<DeleteBookParams>, res: Response) {
        BookRepository.findOneAndUpdate({ _id: req.params.bookId }, req.body, { new: true }, (err, contact) => {
            if (err) return res.status(500).send('Error on the server.');
            res.json(contact);
        });
    }

    public delete(req: RequestModel<UpdateBookParams>, res: Response) {
        BookRepository.remove({ _id: req.params.bookId }, (err) => {
            if (err) return res.status(500).send('Error on the server.');
            res.json({ message: 'Successfully deleted contact!' });
        });
    }

}