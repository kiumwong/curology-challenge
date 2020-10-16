import React from 'react';
import { Grid } from '@material-ui/core';
import UserContactInputForm from './UserContactInputForm';
import UserQuantityForm from './UserQuantityForm';
import UserPaymentInputForm from './UserPaymentInputForm';
import FormField from '../components/controls/FormField';
import NavBar from '../components/controls/NavBar';
import Product from './Product';

function OrderSummaryView(props) {
  const { handleSubmit } = props;

  return (
    <>
      <div className="App">
        <FormField onSubmit={handleSubmit}>
          <NavBar />
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <div className="Spacing-top">
              <Product />
            </div>
            <div className="Spacing-top">
              <UserQuantityForm />
            </div>
          </Grid>

          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <div className="Spacing-top">
              <UserContactInputForm />
            </div>
          </Grid>
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <div className="Spacing-top">
              <UserPaymentInputForm />
            </div>
          </Grid>
        </FormField>
      </div>
    </>
  );
}

export default OrderSummaryView;
