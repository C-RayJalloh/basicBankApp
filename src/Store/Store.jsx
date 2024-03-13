// Redux State Management


// initial State
const initalState = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}


// Account Operations Reducer
function reducer(state = initalState, action){
     switch(action.type) {
        case 'account/Deposite':
            return {...state, balance: state.balance + action.payload};

            case 'account/Deposite':
                return {...state, balance: state.balance + action.payload};
       

            default: 
             return state;
     }

}