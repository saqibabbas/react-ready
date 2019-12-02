import axios from 'axios';
import { HTTP_STATUS_CODE, NETWORK_ERROR } from '../constants';
class HttpClient {
    constructor() {
        // TODO: need to implement base url and version from enviornment variables
        const client = axios.create({
            baseURL: 'https://www.mocky.io/v2/',
            responseType: 'json',
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

    handleError = error => {
        const customError = {
            message: null,
            status: null,
        };
        if (error.response) {
            customError.status = error.response.status;
            customError.message = error.response.statusText;
            switch (error.response.status) {
                case HTTP_STATUS_CODE.BadRequest ||
                    HTTP_STATUS_CODE.Unauthorized:
                    if (error.response.data.errors.lenght) {
                        // eslint-disable-next-line prefer-destructuring
                        customError.message = error.response.data.errors[0];
                    }
                    break;
                case HTTP_STATUS_CODE.Forbidden:
                    this.redirectTo('/login');
                    break;
                case HTTP_STATUS_CODE.NotFound:
                    this.redirectTo('/notfound');
                    break;
                default:
                    break;
            }
        } else {
            customError.message = NETWORK_ERROR;
        }
        return Promise.reject(customError);
    };

    redirectTo = path => {
        document.location = path;
    };

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

export default new HttpClient();
