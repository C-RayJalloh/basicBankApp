/* eslint-disable no-unused-vars */
import CreateCustomer from "./Features/Customers/CreateAccount";
import Customer from "./Features/Customers/Customer";
import AccountOperations from "./Features/Accounts/AccountOperations";
import AccountBalance from "./Features/Accounts/AccountBalance";
import { useSelector } from "react-redux";

function App() {
const fullName = useSelector((store) => store.customer.fullName)
  console.log(fullName)
 return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {/** conditional rendering */}
      {fullName === "" ? 
      <CreateCustomer  />
      : (
        <>
        <Customer />
        <AccountOperations />
        <AccountBalance />
        </>
      )
    };
    </div>
  );
}

export default App;

