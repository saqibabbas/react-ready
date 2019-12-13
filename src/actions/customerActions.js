import * as types from './actionTypes';
import { httpClient } from '../utils';

export function getCustomers() {
    return async dispatch => {
        dispatch(getCustomersPending());
        const response = await httpClient.get('5df35d163100007600b5837f');
        dispatch(getCustomersSuccess(response.result));
    };
}
function getCustomersPending() {
    return {
        type: types.GET_CUSTOMERS_REQUEST,
    };
}

function getCustomersSuccess(customers) {
    return {
        type: types.GET_CUSTOMERS_SUCCESS,
        payload: customers,
    };
}
