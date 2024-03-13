// Redux State Management
import { createStore } from "react-redux";
import rootReducer from "./Reducers";

const Store = createStore(rootReducer);

export default Store;