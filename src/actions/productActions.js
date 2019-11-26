import * as types from './actionTypes';

export function getProducts() {
  return dispatch => {
    dispatch(getProductsPending());
    //TODO: need to implement axios for actual http implementation in seperate helper
    fetch('https://google.com')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(getProductsSuccess(res.products));
        return res.products;
      })
      .catch(error => {
        dispatch(getProductsError(error));
      })
  }
}
function getProductsPending() {
  return {
    type: types.GET_PRODUCTS_REQUEST
  }
}

function getProductsSuccess(products) {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    products: products
  }
}

function getProductsError(error) {
  return {
    type: types.GET_PRODUCTS_FAILURE,
    error: error
  }
}