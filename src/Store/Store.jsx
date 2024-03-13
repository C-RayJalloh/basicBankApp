// Redux State Management

import { createStore, combineReducers} from "redux";


// initial State object
const initalState = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}


// Account Operations Reducer function
function accountReducer(state = initalState, action){
     switch (action.type) {
       case "account/Deposit":
         return { ...state, balance: state.balance + action.payload };

       case "account/Withdraw":
         return { ...state, balance: state.balance - action.payload };

       case "account/RequestLoan":
         if (state.loan > 0) return state;
         return {
           ...state,
           loan: +action.payload.amount,
           loanPurpose: action.payload.purpose,
           balance: state.balance + action.payload.amount,
         };

       case "account/PayLoan":
         return {
           ...state,
           loan: 0,
           loanPurpose: "",
           balance: state.balance - state.loan,
         };

       default:
         return state;
     }

}

// Redux Reducer Selector - with the combine Reducers hook
const rootReducer = combineReducers({
    account: accountReducer,
    // customer: customerReducer,
  });


// create the store 
const store = createStore(rootReducer);

// // dispatching the reducer Actions
// store.dispatch({ type: "account/Deposit", payload: 500 });
// // logging the current STATE
// console.log(store.getState());
// store.dispatch({ type: "account/Withdraw", payload: 200 });
// console.log(store.getState());

// Redux Action Creator 
function deposit(amount) {
    return { type: "account/Deposit", payload: amount };
  }
  
  function withdraw(amount) {
    return { type: "account/Withdraw", payload: amount };
  }
  
  function requestLoan(amount, purpose) {
    return {
      type: "account/RequestLoan",
      payload: { amount, purpose },
    };
  }
  
  function payLoan() {
    return { type: "account/PayLoan" };
  }
  
  // HERE TO DISPATCH WE TAKE THE ACTION CREATOR AND USE IT AS AN ARGUMENT
  store.dispatch(deposit(500));
  console.log(store.getState());
  store.dispatch(withdraw(200));
  console.log(store.getState());
  
  store.dispatch(requestLoan(1000, "Buy a cheap car"));
  console.log(store.getState());
  store.dispatch(payLoan());
  console.log(store.getState());


export default store;