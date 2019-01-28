import { IUserViewModel } from "../../../../shared/viewModels";

export interface IAuthService{
    login(email: string): Promise<{ errorMessage: string, user: IUserViewModel }>;
    registration(user: IUserViewModel): Promise<{ errorMessage: string, user: IUserViewModel }>;
    registrationCheckExistUser(email: string): Promise<{ errorMessage: string}>;
}