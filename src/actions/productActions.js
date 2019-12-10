import * as types from './actionTypes';
import { httpClient } from '../utils';

export function getProducts() {
    return async dispatch => {
        dispatch(getProductsPending());
        const response = await httpClient.get('5dde7f1c310000d4253ae2ad');
        dispatch(getProductsSuccess(response.result));
    };
}
function getProductsPending() {
    return {
        type: types.GET_PRODUCTS_REQUEST,
    };
}

function getProductsSuccess(products) {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        products,
    };
}
