import React from 'react';
import './App.css';
import UserContactInputForm from '../../views/UserContactInputForm';
import UserOrderForm from '../../views/UserOrderForm';
import UserPaymentInputForm from '../../views/UserPaymentInputForm';
import Product from '../Product/Product';

function App() {
  return (
    <>
      <div className="App">
        <Product />
        <UserOrderForm />
        <UserContactInputForm />
        <UserPaymentInputForm />
      </div>
    </>
  );
}

export default App;
