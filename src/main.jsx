/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import store from './Store/Store.jsx'

// store.dispatch({ type: "account/Deposit", payload: 250})
// console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <App/>
    </Provider>

  </React.StrictMode>

)
