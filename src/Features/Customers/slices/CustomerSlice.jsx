// CUSTOMER INITIAL STATE
const  customerinitialState = {
    fullName: "",
    nationalId: "",
    createdAt: ""
  }
  
  
  // CUSTOMER REDUCER FUNCTION
  export default function customerReducer( state = customerinitialState, action) {
    switch (action.type) {
      case "customer/createCustomer":
        return { ...state, fullName: action.payload.fullName, 
          nationalId: action.payload.nationalId, createdAt: action.payload.createdAt};
  
      case "customer/updateCustomerInfo":
        return { ...state, fullName: action.payload };
  
      default:
        return state;
    }
  }

  
  // CUSTOMER REDUX AACTION CREATORS
export function createCustomer(fullName, nationalId) {
    return {type: "customer/createCustomer", payload: {fullName, nationalId, createdAt: new Date().toDateString()}};
  
  }
  
  export function updateCustomerInfo(fullName){
    return { type: "customer/updateCustomerInfo", payload: fullName}
  }