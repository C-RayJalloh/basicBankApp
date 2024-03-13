import CreateCustomer from "./CreateAccount";
import Customer from "./Customer";
import AccountOperations from "./AccountOperations";
import AccountBalance from "./AccountBalance";

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

