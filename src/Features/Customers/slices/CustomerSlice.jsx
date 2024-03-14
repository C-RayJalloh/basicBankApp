// CUSTOMER INITIAL STATE
const  customerinitialState = {
    fullName: "",
    nationalID: "",
    createdAt: ""
  }
  
  
  // CUSTOMER REDUCER FUNCTION
  export default function customerReducer( state = customerinitialState, action) {
    switch (action.type) {
      case "customer/createCustomer":
        return { ...state, fullName: action.payload, 
          nationalID: action.payload, createdAt: action.payload };
  
      case "customer/updateCustomerInfo":
        return { ...state, fullName: action.payload };
  
      default:
        return state;
    }
  }

  
  // CUSTOMER REDUX AACTION CREATORS
export function createCustomer(fullName, nationalID) {
    return {type: "customer/createCustomer", payload: {fullName, nationalID, createdAt: new Date().toDateString()}};
  
  }
  
  export function updateCustomerInfo(fullName){
    return { type: "customer/updateCustomerInfo", payload: fullName}
  }