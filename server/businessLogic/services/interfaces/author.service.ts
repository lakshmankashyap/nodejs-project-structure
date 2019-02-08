import { IAuthorViewModel } from "../../../../shared/viewModels";

export interface IAuthorService{
    get(): Promise<{ errorMessage: string, author: IAuthorViewModel }>;
    add(author: IAuthorViewModel): Promise<{ errorMessage: string, author: IAuthorViewModel }>;
    update(author: IAuthorViewModel): Promise<{ errorMessage: string, author: IAuthorViewModel }>;
    delete(id: string): Promise<{ errorMessage: string, author: IAuthorViewModel }>;
}