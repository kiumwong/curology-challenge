import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserContactInputForm from './components/UserContactInputForm';
import UserOrderForm from './components/UserOrderForm';
import UserPaymentInputForm from './components/UserPaymentInputForm';


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
