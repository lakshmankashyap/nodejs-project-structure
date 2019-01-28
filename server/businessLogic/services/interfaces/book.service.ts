import { IBookViewModel } from "../../../../shared/viewModels";

export interface IBookService{
    add(book: IBookViewModel): Promise<{ errorMessage: string, book: IBookViewModel }>;
}