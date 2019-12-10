import * as types from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    openSnackBar: false,
    snackBarMessage: '',
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
        case types.SHOW_SNACKBAR:
            return {
                ...state,
                openSnackBar: true,
                snackBarMessage: action.payload || state.snackBarMessage,
            };
        case types.HIDE_SNACKBAR:
            return {
                ...state,
                openSnackBar: false,
            };
        default:
            return state;
    }
}
