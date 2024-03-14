import CreateCustomer from "./Features/Customers/CreateAccount";
import Customer from "./Features/Customers/Customer";
import AccountOperations from "./Features/Accounts/AccountOperations";
import AccountBalance from "./Features/Accounts/AccountBalance";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <AccountBalance />
    </div>
  );
}

export default App;

