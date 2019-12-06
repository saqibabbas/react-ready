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
