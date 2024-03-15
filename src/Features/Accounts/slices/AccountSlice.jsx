/* eslint-disable react-refresh/only-export-components */


// initial State object
const AccountinitalState = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}


// Account Operations Reducer function
export default function accountReducer(state = AccountinitalState, action){
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



// Redux Account Action Creators 
export function deposit(amount) {
    return { type: "account/Deposit", payload: amount };
  }
  
  export function withdraw(amount) {
    return { type: "account/Withdraw", payload: amount };
  }
  
  export function requestLoan(amount, purpose) {
    return {
      type: "account/RequestLoan",
      payload: { amount, purpose },
    };
  }
  
  export function payLoan() {
    return { type: "account/PayLoan" };
  }
