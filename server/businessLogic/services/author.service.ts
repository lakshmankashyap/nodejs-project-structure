import { IAuthorService } from "./interfaces/author.service";
import { IAuthorViewModel } from "../../../shared/viewModels";
import { AuthorRepository } from "../../dataAccess";

export class AuthorService implements IAuthorService {
  
    public async get(): Promise<{ errorMessage: string, author: IAuthorViewModel }> {
        return null
    }

    public async add(author: IAuthorViewModel): Promise<{ errorMessage: string, author: IAuthorViewModel }> {
        let newAuthor = new AuthorRepository(author);
        try {
            var result = await newAuthor.save();

            if (result.errors) {
                return {
                    author: null,
                    errorMessage: 'Error on the server.'
                };
            }
            return {
                author: author,
                errorMessage: result.errors
            };
        } catch (error) {
            return {
                author: null,
                errorMessage: error._message || 'Sorry something went wrong.'
            };
        }
    }
    public async update(author: IAuthorViewModel): Promise<{ errorMessage: string, author: IAuthorViewModel }> {
        return null
    }

    public async delete(id: string): Promise<{ errorMessage: string, author: IAuthorViewModel }> {
        return null
    }
}