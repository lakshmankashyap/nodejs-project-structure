import { Request, Response } from 'express';
import { RequestModel } from '../middlewares/authMiddleware'
import { BookRepository } from '../../../dataAccess';
import { IBookService } from '../../../businessLogic/services/interfaces/book.service';
import { BookService } from '../../../businessLogic';
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

    public add(req: RequestModel<{}>, res: Response) {
        var bookService = new BookService();
        //req.body
        bookService.add({
            _id:"sdg",
            authorId:"dgdg",
            title:"my book"
        }).then(data => {
            if (data.errorMessage) {
                return res.status(500).send(data.errorMessage);
            }
            res.json(data.book);
        });
    }

    public get(req: RequestModel<{ authorId: string }>, res: Response) {
        var bookService = new BookService();
        bookService.get().then(data => {
            console.log("++++++++")
        })
    }

    public get1(req: RequestModel<{ authorId: string }>, res: Response) {
        let authorId = req.params.authorId;
        BookRepository.find({ authorId: authorId }, (err, book) => {
            if (err) return res.status(500).send('Error on the server.');
            res.json(book);
        });
    }

    public getById(req: RequestModel<GetByIdBookParams>, res: Response) {
        BookRepository.findById(req.params.bookId, (err, book) => {
            if (err) return res.status(500).send('Error on the server.');
            res.json(book);
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