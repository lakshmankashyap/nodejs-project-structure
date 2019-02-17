import { BaseService } from "./base.service";
import axios, { AxiosPromise } from "axios"

export class LocalStorageService {
    constructor() {
    }

    public get<T>(param: string): T{
            return JSON.parse(localStorage.getItem(param)) as T; 
    }

    public getItem(param: string){
        return localStorage.getItem(param);
    }

    public set(param: string, model: string): void{
        localStorage.setItem(param, model);
    }

    public delete(): void{
        localStorage.clear();
    }
}