import * as types from './actionTypes';
import { httpClient } from '../utils';

export function getProducts() {
  return async dispatch => {
    try {
      dispatch(getProductsPending());
      const response = await httpClient.get('5dde7f1c310000d4253ae2ad');
      dispatch(getProductsSuccess(response.result));
    }
    catch (error) {
      dispatch(getProductsError(error.message));
    }

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
    type: types.GET_PRODUCTS_ERROR,
    error: error
  }
}