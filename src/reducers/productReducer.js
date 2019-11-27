import * as types from '../actions/actionTypes';

const initialState = {
  list: [],
  error: null,
  isLoading: false
};

export default function productReducer(state = initialState, action) {

  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.products,
        isLoading: false
      }
    case types.GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state;
  }
}
