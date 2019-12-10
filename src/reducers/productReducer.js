import * as types from '../actions/actionTypes';

const initialState = {
    list: [],
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                list: [],
            };
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                list: action.products,
            };
        default:
            return state;
    }
}
