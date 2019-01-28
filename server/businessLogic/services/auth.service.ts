import { IAuthService } from "./interfaces/auth.service";
import { UserRepository } from "../../dataAccess";
import { IUserViewModel } from "../../../shared/viewModels";

export class AuthService implements IAuthService {
    public async registrationCheckExistUser(email: string): Promise<{ errorMessage: string}> {
        try {
            var result = await UserRepository.find({ email: email })
            if(result.length){
                return {
                    errorMessage: "User exist"//result.errors
                };
            }
            return {
                errorMessage: ""//result.errors
            };
        } catch (error) {
            return {
                errorMessage:  error._message || 'Sorry something went wrong.'
            };
        }
    }
    public async registration(user: IUserViewModel): Promise<{ errorMessage: string, user: IUserViewModel }> {
        let newUser = new UserRepository(user);
        console.log(newUser)
        try {
            var result = await newUser.save();
            return {
                user: user,
                errorMessage: ''
            };
        } catch (error) {
            return {
                user: null,
                errorMessage:  error._message || 'Sorry something went wrong.'
            };
        }
    }


    public async login(email: string): Promise<{ errorMessage: string, user: IUserViewModel }> {
        try {
            var result = await UserRepository.find({ email: email })
            if(result.length){
                let userData = new UserRepository(result);
                return {
                    user: userData,
                    errorMessage: ""//result.errors
                };
            }
            return {
                user: null,
                errorMessage: ""//result.errors
            };
        } catch (error) {
            return {
                user: null,
                errorMessage:  error._message || 'Sorry something went wrong.'
            };
        }
    }
}