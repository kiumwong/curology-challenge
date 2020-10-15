import React, { useState, useEffect } from 'react';
import UserContactInputForm from './UserContactInputForm';
import UserQuantityForm from './UserQuantityForm';
import UserPaymentInputForm from './UserPaymentInputForm';
import FormField from '../components/controls/FormField';

function OrderSummaryView(props) {
  const { handleSubmit } = props;

  const [orderLocalStore, setOrderLocalStore] = useState([]);
  const [userLocalStore, setUserLocalStore] = useState([]);
  const [paymentLocalStore, setPaymentLocalStore] = useState([]);
  const [isDataUpdated, setDataUpdate] = useState(false);

  const orderData = JSON.parse(localStorage.getItem('orderData'));
  const userData = JSON.parse(localStorage.getItem('userData'));
  const paymentData = JSON.parse(localStorage.getItem('paymentData'));

  console.log(process.env.NODE_ENV);
  console.log(process.envPUBLIC_URL)
  console.log(process.env.NODE_PATH)
  console.log(process.env.PORT)
  console.log(process.env)


  // window.addEventListener("storage", storageEventHandler, false);

  // function storageEventHandler(e) {
  //   alert("storage updated");
  // }

  console.log(isDataUpdated);

  console.log(orderLocalStore);
  console.log(userLocalStore);
  console.log(paymentLocalStore);

  // useEffect(() => {
  //   storageEventHandler();
  // }, []);

  return (
    <>
      <div className="App">
        <FormField onSubmit={handleSubmit}>
          <UserQuantityForm />
          <UserContactInputForm />
          <UserPaymentInputForm />
        </FormField>
      </div>
    </>
  );
}

export default OrderSummaryView;
