import React, { useState } from 'react';
import { Card, CardHeader, CircularProgress, Grid } from '@material-ui/core';
import CustomButton from '../components/controls/CustomButton';
import TextInputField from '../components/controls/TextInputField';
import FormField from '../components/controls/FormField';
import MessageAlert from '../components/controls/MessageAlert';

import useValidateForm from '../actions/useValidateForm';

import initialValues from '../variables/initialValues';


function UserPaymentInputForm(props) {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);


  const validate = (fieldValues = values) => {
    let err = { ...errors };

    if ('ccNum' in fieldValues) {
      err.ccNum = /\b(?:3[47]\d{2}([\s-]?)\d{6}\1\d|(?:(?:4\d|5[1-5]|65)\d{2}|6011)([\s-]?)\d{4}\2\d{4}\2)\d{4}\b/.test(
        fieldValues.ccNum,
      )
        ? ''
        : 'Credit card number is not valid.';
    }
    if (typeof fieldValues['ccNum'] in fieldValues === 'string') {
      err.ccNumType = fieldValues.ccNum ? '' : 'Not a string';
    }

    if ('exp' in fieldValues) {
      err.exp = /^((0[1-9])|(1[0-2]))\/((2009)|(20[1-2][0-9]))$/.test(fieldValues.exp)
        ? ''
        : 'Expiration date is invalid.';
    }
    if (typeof fieldValues['exp'] in fieldValues === 'string') {
      err.expType = fieldValues.exp ? '' : 'Not a string';
    }

    setErrors({ ...err });
    setIsLoading(false);

    if (fieldValues === values) {
      return Object.values(err).every((x) => x === '');
    }
  };

  const { values, setValues, errors, setErrors, handleChange, resetForm } = useValidateForm(
    initialValues,
    true,
    validate,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (validate()) {
      registerOrder();
      if (success) {
        resetForm();
        setIsLoading(false);
      }
    }
  };

  const handleSuccessClose = () => {
    setSuccessAlert(false);
  };

  const handleErrorClose = () => {
    setErrorAlert(false);
  };

  const registerOrder = async () => {
    const orderData = JSON.parse(localStorage.getItem('orderData'));
    const userData = JSON.parse(localStorage.getItem('userData'));

    const requestBody = JSON.stringify({
      firstName: JSON.parse(userData).firstName,
      lastName: JSON.parse(userData).lastName,
      email: JSON.parse(userData).email,
      phone: JSON.parse(userData).phone,
      address: {
        street1: JSON.parse(userData).address.street1,
        street2: JSON.parse(userData).address.street2,
        city: JSON.parse(userData).address.city,
        state: JSON.parse(userData).address.state,
        zip: JSON.parse(userData).address.zip,
      },
      payment: {
        ccNum: values.ccNum,
        exp: values.exp,
      },
      quantity: JSON.parse(orderData).quantity,
      total: JSON.parse(orderData).total,
    });
    try {
      const response = await fetch(`http://127.0.0.1:5678/api/v1/magic`, {
        method: 'POST',
        body: requestBody,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const responseBody = await response.json();
      if (responseBody.status === 400) {
        window.alert('Please provide complete details.');
        setError('Please provide complete details.');
        setIsLoading(false);
        setErrorAlert(true);
      } else if (responseBody.status === 401) {
        window.alert('A user with the information already exists.');
        setError('A user with the information already exists.');
        setIsLoading(false);
        setErrorAlert(true);
      } else if (responseBody.status === 401) {
        window.alert('Magic potion order may not exceed maximum quanity of 3');
        setError('Magic potion order may not exceed maximum quanity of 3');
        setIsLoading(false);
        setErrorAlert(true);
      }
      if (responseBody.status === 201 || 204) {
        window.alert(
          `Thank you ${requestBody.firstName} ${requestBody.lastName}! Your order for ${requestBody.quantity} Magic potion(s), total of ${requestBody.total} will be charged to cc: ${requestBody.payment.ccNum}, exp: ${requestBody.payment.exp}. Your order will be shipped to ${requestBody.address.street1} ${requestBody.address.street2} ${requestBody.address.city}, ${requestBody.address.state}, ${requestBody.address.zip}. If we have any issues, we will contact you at ${requestBody.email} or ${requestBody.phone}. Follow us for more details on the Magic Potion!`,
        );
        setSuccess('Your Order has been placed!');
        localStorage.setItem('orders', JSON.stringify(requestBody));
        setIsLoading(false);
        setSuccessAlert(true);
      }
    } catch (error) {
      window.alert(
        `error: ${error.message}. Sorry ${values.firstName} ${values.lastName}! Your order for ${values.quantity} Magic potion(s), total of ${values.total} is very important to us. But due to the high volumes of orders, we are having issues with our backend. If you see any charges, please contact us. Unfortunately, your order will NOT be shipped. If we fix our backend issues related to no database to query (sequelize) order parameters, we will contact you. Follow us for more details on the Magic Potion!`,
      );
      setError('We are working on this issue!');
      setIsLoading(false);
      setErrorAlert(true);
    }
  };

  return (
    <FormField onSubmit={handleSubmit}>
      <Grid container xs={12} sm={12} md={12}>
        <Card>
          <CardHeader style={{ backgroundColor: 'rgb(51, 46, 84)', color: '#fff' }} title="Payment Information" />

          {errorAlert ? (
            <MessageAlert
              errorMessage={`Error: ${error}`}
              onClick={handleErrorClose}
            />
          ) : null}

          {successAlert ? (
            <MessageAlert
              errorMessage={`Success: ${success}`}
              onClick={handleSuccessClose}
            />
          ) : null}

          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <TextInputField
              error={errors.ccNum}
              style={{ padding: '10px', width: '100%' }}
              id="ccNum"
              label="Credit Card Number"
              name="ccNum"
              onChange={handleChange}
              placeholder="4357 5869 4748 4748"
              required={true}
              value={values.ccNum}
              variant="outlined"
              onBlur={handleChange}
            />
            <TextInputField
              error={errors.exp}
              style={{ padding: '10px', width: '100%' }}
              id="exp"
              label="Expiration Date"
              name="exp"
              onChange={handleChange}
              placeholder="02/2024"
              required={true}
              value={values.exp}
              variant="outlined"
              onBlur={handleChange}
            />
          </Grid>

          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <CustomButton
              color={'primary'}
              variant={'contained'}
              size={'large'}
              onClick={handleSubmit}
              text={isLoading ? <CircularProgress color={'inherit'} /> : 'Submit Order'}
            />
          </Grid>
        </Card>
      </Grid>
    </FormField>
  );
}

export default UserPaymentInputForm;
