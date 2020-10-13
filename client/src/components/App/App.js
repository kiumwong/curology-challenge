import React from 'react';
import './App.css';
import UserContactInputForm from '../../views/UserContactInputForm';
import UserQuantityForm from '../../views/UserQuantityForm';
import UserPaymentInputForm from '../../views/UserPaymentInputForm';
import Product from '../Product/Product';

function App() {
  return (
    <>
      <div className="App">
        {/* <Product /> */}
        <UserQuantityForm />
        <UserContactInputForm />
        <UserPaymentInputForm />
      </div>
    </>
  );
}

export default App;
