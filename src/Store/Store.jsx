// Redux State Management

import { createStore, combineReducers} from "redux";


// initial State
const initalState = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}


// Account Operations Reducer
function accountReducer(state = initalState, action){
     switch (action.type) {
       case "account/Deposite":
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


// create the store - statemanagement STORE
const Store = createStore(rootReducer)