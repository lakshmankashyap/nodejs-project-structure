import { BaseService } from "./base.service";
import axios, { AxiosPromise } from "axios"

export class LocalStorageService {
    constructor() {
    }

    public get<T>(param: string): T{
        return JSON.parse(localStorage.getItem(param)) as T; 
    }

    public set<T>(param: string, model: T): void{
        localStorage.setItem(param, JSON.stringify(model));
    }

    public delete(): void{
        localStorage.clear();
    }
}