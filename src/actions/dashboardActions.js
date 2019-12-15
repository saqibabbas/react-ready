import * as types from './actionTypes';
import { httpClient } from '../utils';

export function getOrders() {
    return async dispatch => {
        dispatch(getOrdersPending());
        const response = await httpClient.get('5df64b99340000223de5a57a');
        dispatch(getOrdersSuccess(response.result));
    };
}
function getOrdersPending() {
    return {
        type: types.GET_DASHBOARD_ORDERS_REQUEST,
    };
}

function getOrdersSuccess(orders) {
    return {
        type: types.GET_DASHBOARD_ORDERS_SUCCESS,
        payload: orders,
    };
}
