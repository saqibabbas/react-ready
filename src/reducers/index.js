import { combineReducers } from 'redux';
import product from './productReducer';
import customer from './customerReducer';
import common from './commonReducer';

const rootReducer = combineReducers({
    product,
    customer,
    common,
});

export default rootReducer;
