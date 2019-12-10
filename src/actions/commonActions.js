import * as types from './actionTypes';

export function showLoading() {
    return {
        type: types.SHOW_LOADING,
    };
}
export function hideLoading() {
    return {
        type: types.HIDE_LOADING,
    };
}
export function showSnackBar(message) {
    return {
        type: types.SHOW_SNACKBAR,
        payload: message,
    };
}
export function hideSnackBar() {
    return {
        type: types.HIDE_SNACKBAR,
    };
}
