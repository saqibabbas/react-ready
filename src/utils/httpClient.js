import axios from 'axios';
import { HttpStatusCode, NetworkError } from '../constants';
class httpClient {
    constructor() {
        //TODO: need to implement base url and version from enviornment variables
        let client = axios.create({
            baseURL: "https://www.mocky.io/v2/",
            responseType: "json"
        });
        client.interceptors.request.use(this.handleRequest);
        client.interceptors.response.use(this.handleSuccess, this.handleError);
        this.client = client;
    }
    handleRequest(config) {
        // here we can add custom logic and headers in request e.g : Authorization header
        return config;
    }
    handleSuccess(response) {
        return response.data;
    }

    handleError = (error) => {
        const customError = {
            message: null,
            status: null
        };
        if (error.response) {
            customError.status = error.response.status;
            customError.message = error.response.statusText
            switch (error.response.status) {
                case HttpStatusCode.BadRequest:
                    if (error.response.data.errors.lenght) {
                        customError.message = error.response.data.errors[0];
                    }
                    break;
                case HttpStatusCode.Forbidden:
                    this.redirectTo('/login')
                    break;
                case HttpStatusCode.NotFound:
                    this.redirectTo('/notfound')
                    break;
                default:
                    break;
            }
        }
        else {
            customError.message = NetworkError;
        }
        return Promise.reject(customError)
    }

    redirectTo = (path) => {
        document.location = path
    }

    get(url) {
        return this.client.get(url);
    }

    post(url, payload) {
        return this.client.post(url, payload);
    }

    put(url, payload) {
        return this.client.put(url, payload);
    }
}

export default new httpClient();