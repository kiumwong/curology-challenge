import React, { useState , useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardBody,
  CardHeader,
  Grid,
  Paper,
} from '@material-ui/core';
import CustomButton from '../components/controls/CustomButton';
import SelectField from '../components/controls/SelectField';
import TextInputField from '../components/controls/TextInputField';
import FormField from '../components/controls/FormField';

import useValidateForm from '../actions/useValidateForm';

import quantityArr from '../variables/quantity';
import initialValues from '../variables/initialValues';

import '../components/App/App.css';

function UserOrderForm(props) {
  const productPrice = 49.99;
  const maxQuantity = 3;

  const validate = (fieldValues = values) => {
    let err = { ...errors };

    if ('quantity' in fieldValues) {
      err.quantity = fieldValues.quantity ? '' : 'Max 3: Due to limited supplies.';
    }
    console.log(fieldValues['quantity'])
    if ('total' in fieldValues) {
      err.total = fieldValues.total <= productPrice * maxQuantity ? '' : 'Exceeded max order amount.';
    }
    setErrors({ ...err });

    if (!err.total) {
      values.total = orderTotal.toString();
    }

    if (fieldValues === values) {
      return Object.values(err).every((x) => x == '');
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
      console.log(requestBody);
      localStorage.setItem('orderData', JSON.stringify(requestBody));

      const userData = JSON.parse(localStorage.getItem('orderData'));
      console.log(JSON.parse(userData));
    }
  };

  useEffect(() => {
    localStorage.getItem('jwt');
  }, [])

  return (
    <FormField onSubmit={handleSubmit}>
      <Card>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Accordion>
              <AccordionSummary
                style={{ backgroundColor: 'rgb(51, 46, 84)' }}
                expandIcon={'+'}
                aria-controls="#"
                id="#"
              >
                <CardHeader style={{ color: '#fff' }} title="Contact Information" />
              </AccordionSummary>
              <AccordionDetails>
                <Grid item xs={6} sm={6} md={2}>
                  <SelectField
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
                </Grid>
                <Grid item xs={6} sm={6} md={6}></Grid>
                <Paper>
                  <h2>Price: $49.99</h2>
                  <h4 style={{color: 'red'}}>{`Subtotal: $${orderTotal.toFixed(2)}`}</h4>
                </Paper>
                <TextInputField
                    id="total"
                    label="Total"
                    name="total"
                    onChange={handleChange}
                    required={true}
                    disabled={true}
                    value={`$${orderTotal}`}
                    variant="filled"
                    onBlur={handleChange}
                  />
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Magic Potion
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Revolutionizing the skincare industry and we're ready to unveil it to the world. This product is so different and magical and will work wonders on your skin! 
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CustomButton
                  color={'primary'}
                  variant={'contained'}
                  size={'large'}
                  onClick={handleSubmit}
                  text={'Next'}
                />
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Card>
    </FormField>
  );
}

export default UserOrderForm;
