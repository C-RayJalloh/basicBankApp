/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// Redux State Management

import { createStore, combineReducers, applyMiddleware} from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "../Features/Accounts/slices/AccountSlice";
import customerReducer from "../Features/Customers/slices/CustomerSlice";
import { composeWithDevTools } from "@redux-devtools/extension";



// Redux Reducer Selector - with the combine Reducers hook
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
  });


// create the store & apply the middleware from thunk
const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)));
    
    


export default store;

