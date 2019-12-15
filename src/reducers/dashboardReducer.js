import * as types from '../actions/actionTypes';

const initialState = {
    orders: [],
};

export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_DASHBOARD_ORDERS_REQUEST:
            return {
                ...state,
                orders: [],
            };
        case types.GET_DASHBOARD_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload,
            };
        default:
            return state;
    }
}
