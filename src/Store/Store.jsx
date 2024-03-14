/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// Redux State Management

import { createStore, combineReducers} from "redux";
import accountReducer from "../Features/Accounts/slices/AccountSlice";
import customerReducer from "../Features/Customers/slices/CustomerSlice";



// Redux Reducer Selector - with the combine Reducers hook
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
  });


// create the store 
const store = createStore(rootReducer);


export default store;

