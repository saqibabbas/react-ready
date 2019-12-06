import * as types from '../actions/actionTypes';

const initialState = {
    isLoading: false,
};

export default function commonReducer(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case types.HIDE_LOADING:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}
