import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserContactInputForm from './views/UserContactInputForm';
import UserOrderForm from './views/UserOrderForm';
import UserPaymentInputForm from './views/UserPaymentInputForm';


function App() {
  return (
    <div className="App">
      <UserOrderForm/>
      <UserContactInputForm/>
      <UserPaymentInputForm/>
    </div>
  );
}

export default App;
