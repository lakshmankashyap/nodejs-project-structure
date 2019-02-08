import { IAuthorViewModel } from "../../../../../../shared/viewModels";

export interface IAuthorResponseModel {
    errorMessage: string,
    author?: [IAuthorViewModel]
}