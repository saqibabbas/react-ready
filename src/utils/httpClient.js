import axios from 'axios';

class httpClient {
    constructor() {
        //TODO: need to implement base url and version from enviornment variables
        let service = axios.create({
            baseURL: "http://www.mocky.io/v2/",
            responseType: "json"
        });
        service.interceptors.request.use(this.handleRequest);
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }
    handleRequest(config) {
        // here we can add custom logic and headers in request e.g : Authorization header
        return config;
    }
    handleSuccess(response) {
        return response.data;
    }

    handleError = (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    this.redirectTo(document, '/notfound')
                    break;
                default:
                    return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    }

    redirectTo = (document, path) => {
        document.location = path
    }

    get(url) {
        return this.service.get(url);
    }

    post(url, payload) {
        return this.service.post(url, payload);
    }

    put(url, payload) {
        return this.service.put(url, payload);
    }
}

export default new httpClient();