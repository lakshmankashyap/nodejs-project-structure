import { IUserViewModel } from "../../../../../../shared/viewModels";

export interface IAuthResponseModel {
    errorMessage: string,
    auth?: boolean,
    token?: string,
    user?: IUserViewModel
}