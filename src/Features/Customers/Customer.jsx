import { useSelector } from "react-redux";

function Customer() {
    const customer = useSelector((state) => state.customer);
    const fullName = customer.fullName; // Extracting fullName from the customer object

    console.log(fullName);
  
    return <h2>👋 Welcome, {fullName}</h2>;
}
  
export default Customer;
