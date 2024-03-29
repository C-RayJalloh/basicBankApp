/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";
import { useDispatch } from "react-redux";
import {createCustomer} from "./slices/CustomerSlice"

function CreateAccount() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  // set dispatch method to redux dispatch function
const dispatch = useDispatch();

  function handleClick() {
      // dispatching actions to the redux store with the useDispatch() hook
      if(!fullName || !nationalId) return;
      dispatch(createCustomer(fullName, nationalId));
      
  }
  
  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick} >Create new customer</button>
      </div>
    </div>
  );
}

export default CreateAccount;
