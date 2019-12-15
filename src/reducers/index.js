import { combineReducers } from 'redux';
import product from './productReducer';
import customer from './customerReducer';
import common from './commonReducer';
import dashboard from './dashboardReducer';

const rootReducer = combineReducers({
    product,
    customer,
    common,
    dashboard,
});

export default rootReducer;
