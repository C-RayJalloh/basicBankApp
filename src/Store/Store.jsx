/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// Redux State Management

import { createStore, combineReducers} from "redux";





// Redux Reducer Selector - with the combine Reducers hook
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
  });


// create the store 
const store = createStore(rootReducer);

// // dispatching the reducer Actions
// store.dispatch({ type: "account/Deposit", payload: 500 });
// // logging the current STATE
// console.log(store.getState());
// store.dispatch({ type: "account/Withdraw", payload: 200 });
// console.log(store.getState());




  
  // // HERE TO DISPATCH WE TAKE THE ACTION CREATOR AND USE IT AS AN ARGUMENT
  // store.dispatch(deposit(500));
  // console.log(store.getState());
  // store.dispatch(withdraw(200));
  // console.log(store.getState());
  
  // store.dispatch(requestLoan(1000, "Buy a cheap car"));
  // console.log(store.getState());
  // store.dispatch(payLoan());
  // console.log(store.getState());

  // // DISPATCHING WITH ACTION CREATORS
  // store.dispatch(createCustomer("ray jahrulo", "08397823"))
  // console.log(store.getState());


// USING THE DISPATCH METHOD WITHOUT CREATORS


export default store;

