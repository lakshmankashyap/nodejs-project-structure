import axios from 'axios';

export class BaseService {
    constructor() {
        let token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common = {
                "x-access-token": token
            };
        }
    }
}