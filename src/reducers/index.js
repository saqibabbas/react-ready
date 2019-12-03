import { combineReducers } from 'redux';
import product from './productReducer';
import customer from './customerReducer';

const rootReducer = combineReducers({
    product,
    customer,
});

export default rootReducer;
