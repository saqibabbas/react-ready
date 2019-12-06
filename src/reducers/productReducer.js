import * as types from '../actions/actionTypes';

const initialState = {
    list: [],
    error: null,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_PRODUCTS_REQUEST:
            return {
                ...state,
            };
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                list: action.products,
            };
        case types.GET_PRODUCTS_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}
