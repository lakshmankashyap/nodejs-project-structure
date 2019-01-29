import { BaseService } from "./base.service";
import axios, { AxiosPromise } from "axios"
import { IUserViewModel } from "../../../../../../shared/viewModels";
import { environment } from '../../environment/environment';
import { IAuthResponseModel } from '../model/auth-response.model';

export class AuthService extends BaseService {
    constructor() {
        super();
    }

    public login(model: {email: string, password: string}) : AxiosPromise<IAuthResponseModel> {
        return axios.post(environment().apiUrl + "auth/login", model);
    }
    
    public register(model: IUserViewModel) :  AxiosPromise<IAuthResponseModel> {
        return axios.post(environment().apiUrl + "auth/registration", model);
    }

}