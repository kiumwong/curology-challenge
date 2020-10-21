import React from 'react';
import { Card, CardHeader, Grid } from '@material-ui/core';
import CustomButton from '../components/controls/CustomButton';
import SelectField from '../components/controls/SelectField';
import TextInputField from '../components/controls/TextInputField';
import FormField from '../components/controls/FormField';

import useValidateForm from '../actions/useValidateForm';

import quantityArr from '../variables/quantity';
import initialValues from '../variables/initialValues';

import '../components/App/App.css';
import { number } from 'prop-types';

function UserOrderForm(props) {
  const productPrice = 49.99;
  const maxQuantity = 3;
  

  const validate = (fieldValues = values) => {
    let err = { ...errors };

    if ('quantity' in fieldValues) {
      err.quantity = fieldValues.quantity <= maxQuantity ? '' : 'Max 3: Due to limited supplies.';
    }
    if (typeof fieldValues['quantity'] in fieldValues === number) {
      err.quantityType = fieldValues.quantity ? '' : 'Not a number';
    }

    if ('total' in fieldValues) {
      err.total = fieldValues.total <= productPrice * maxQuantity ? '' : 'Exceeded max order amount.';
    }

    if (typeof fieldValues['total'] in fieldValues === 'string') {
      err.totalType = fieldValues.total ? '' : 'Not a string';
    }

    setErrors({ ...err });

    if (!err.total) {
      values.total = orderTotal.toString();
    }

    if (fieldValues === values) {
      return Object.values(err).every((x) => x === '');
    }
  };

  const { values, setValues, errors, setErrors, handleChange, resetForm } = useValidateForm(
    initialValues,
    true,
    validate,
  );

  const orderTotal = productPrice * values.quantity;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const requestBody = JSON.stringify({
        quantity: values.quantity,
        total: values.total,
      });
      localStorage.setItem('orderData', JSON.stringify(requestBody));
      window.alert(
        `${values.quantity} Magic Potion(s) added to cart. Total is $${values.total}. Continue to Contact Information.`,
      );
    }
  };

  return (
    <FormField onSubmit={handleSubmit}>
      <Grid container xs={12} sm={12} md={12}>
        <Card>
          <CardHeader style={{ backgroundColor: 'rgb(51, 46, 84)', color: '#fff' }} title="Price: $49.99" />
          <h4 style={{ color: 'red' }}>{`Subtotal: $${orderTotal.toFixed(2)}`}</h4>
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <SelectField
              style={{ padding: '10px', width: '100%' }}
              error={errors.quantity}
              id="quantity"
              label="Qty"
              name="quantity"
              onChange={handleChange}
              defaultValue={1}
              required={true}
              select={true}
              value={values.quantity}
              onBlur={handleChange}
              options={quantityArr}
            />
            <TextInputField
              id="total"
              style={{ padding: '10px', width: '100%' }}
              label="Total"
              name="total"
              onChange={handleChange}
              required={true}
              disabled={true}
              value={`$${orderTotal}`}
              variant="filled"
              onBlur={handleChange}
            />
          </Grid>
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <CustomButton color={'primary'} variant={'contained'} onClick={handleSubmit} text={'Add to cart'} />
          </Grid>
        </Card>
      </Grid>
    </FormField>
  );
}

export default UserOrderForm;
