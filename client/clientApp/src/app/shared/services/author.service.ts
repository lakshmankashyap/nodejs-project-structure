import axios, { AxiosPromise } from "axios"
import { BaseService } from "./base.service";
import { environment } from 'src/app/environment/environment';
import { IAuthorResponseModel } from '../model/author-response.model';
import { IAuthorViewModel } from '../../../../../../shared/viewModels';

export class AuthorService extends BaseService {
    constructor() {
        super();
    }

    public get(): AxiosPromise<IAuthorResponseModel> {
        return axios.get(environment().apiUrl + "author");
    }

    public getById(model: string): AxiosPromise<IAuthorResponseModel> {
        return axios.get(environment().apiUrl + "author/" + model);
    }

    public add(model: IAuthorViewModel): AxiosPromise<IAuthorResponseModel> {
        return axios.post(environment().apiUrl + "author", model);
    }

    public update(model: IAuthorViewModel): AxiosPromise<IAuthorResponseModel> {
        return axios.put(environment().apiUrl + "author/" + model._id, model);
    }

    public delete(model: IAuthorViewModel): AxiosPromise<IAuthorResponseModel> {
        return axios.delete(environment().apiUrl + "author/" + model._id);
    }

}