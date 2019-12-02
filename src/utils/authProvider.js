import { AUTH_TOKEN, TOKEN_EXPIRY } from '../constants';

class AuthProvider {
    async login() {
        try {
            // un-comment the http call once integrated with actual login API
            // const response = await httpClient.post('login', credentials);
            // set token and token expiry in local storage or as per your approach

            // localStorage.setItem(AUTH_TOKEN, response.result.token);
            // localStorage.setItem(TOKEN_EXPIRY, response.result.tokenExpiry);

            // genenating token 2 minute token expiry time
            const tokenExpiry = this.getTokenFakeExpiryTime(2).toISOString();

            localStorage.setItem(AUTH_TOKEN, 'token');
            localStorage.setItem(TOKEN_EXPIRY, tokenExpiry);
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error.message);
        }
    }

    logout() {
        localStorage.removeItem(AUTH_TOKEN);
        localStorage.removeItem(TOKEN_EXPIRY);
    }

    refreshToken() {}

    getTokenFakeExpiryTime(minutes) {
        const dt = new Date();
        return new Date(dt.setUTCMinutes(dt.getUTCMinutes() + minutes));
    }
}

export default new AuthProvider();
