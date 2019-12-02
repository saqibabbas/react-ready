import { AUTH_TOKEN, TOKEN_EXPIRY } from '../constants';

class AuthGuard {
    isAuthenticated() {
        return (
            localStorage.getItem(AUTH_TOKEN) &&
            localStorage.getItem(TOKEN_EXPIRY) > new Date().toISOString()
        );
    }
}

export default new AuthGuard();
