import * as types from '../actions/actionTypes';

const initialState = {
    list: [],
};

export default function customerReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_CUSTOMERS_REQUEST:
            return {
                ...state,
                list: [],
            };
        case types.GET_CUSTOMERS_SUCCESS:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
}
