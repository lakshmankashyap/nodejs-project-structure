import { BaseService } from "./base.service";
import axios, { AxiosPromise } from "axios"
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';

import { IUserViewModel } from "../../../../../../shared/viewModels";
import { environment } from '../../environment/environment';
import { IAuthResponseModel } from '../model/auth-response.model';
import { LocalStorageService } from './localStorage.service';
import { RoleEnum } from '../../../../../../shared/enum';

export class AuthService extends BaseService {
    private localStorageService: LocalStorageService = new LocalStorageService();
    private jwtHelper: JwtHelperService = new JwtHelperService();

    constructor() {
        super();
    }

    public login(model: { email: string, password: string }): AxiosPromise<IAuthResponseModel> {
        return axios.post(environment().apiUrl + "auth/login", model);
    }

    public register(model: IUserViewModel): AxiosPromise<IAuthResponseModel> {
        return axios.post(environment().apiUrl + "auth/registration", model);
    }

    public logout(): void {
        this.localStorageService.delete();
    }

    public isAuthenticated(): boolean {
        // console.log(!this.jwtHelper.isTokenExpired( this.localStorageService.get<string>('token')))
        // const tokenPayload = decode(this.localStorageService.get<string>('token'));
        // console.log(tokenPayload);
        return this.localStorageService.get<string>('token') ? true : false
    }

    public isAccessRole(): Number {
        const token = localStorage.getItem('token');
        const tokenPayload: IUserViewModel = decode(token);
        return tokenPayload['role'];
    }
}