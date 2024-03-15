/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// Redux State Management

// REDUX TOOLKIT

import accountReducer from "../Features/Accounts/slices/AccountSlice";
import customerReducer from "../Features/Customers/slices/CustomerSlice";
import { configureStore } from "@reduxjs/toolkit";




// create the store & call configureStore and pass the reducers
const store = configureStore({
  reducer : {
    account: accountReducer,
    customer: customerReducer,
  }
})
    
    


export default store;

