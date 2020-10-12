import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Accordion, AccordionSummary, AccordionDetails, Card, CardHeader, Grid } from '@material-ui/core';
import CustomButton from '../components/controls/CustomButton';
import SelectField from '../components/controls/SelectField';
import TextInputField from '../components/controls/TextInputField';
import FormField from '../components/controls/FormField';
import ValidateForm from '../components/controls/ValidateForm';

import stateArr from '../variables/states';

const initialValues = {
  ccNum: '',
  email: '',
  exp: '',
  firstName: '',
  lastName: '',
  phone: '',
  quantity: 0,
  street1: '',
  street2: '',
  total: '',
  city: '',
  state: '',
  zip: '',
};

function UserContactInputForm(props) {

  const [isDataValid, setisDataValid] = useState(false);

  const validate = (fieldValues = values) => {
    let err = { ...errors };

    if (!fieldValues.firstName) {
      err.firstName = fieldValues.firstName ?  '' : 'First name is required.';
    }
    
    if (!fieldValues.lastName) {
      err.lastName = 'Last name is required.';
    }
    if (!fieldValues.email) {
      err.email = 'Email is required.';
    }
    if ('email' in fieldValues) {
      err.email = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(fieldValues.email) ? "" : "Email is not valid.";
    }
    
      setErrors({ ...err });
      console.log(errors)
    

    if (fieldValues === values) {
      console.log(fieldValues);
      return Object.values(err).every((errs) => errs === '');
    }
  };

  const { values, setValues, errors, setErrors, handleChange, resetForm } = ValidateForm(initialValues, true, validate);

  console.log(errors);
  console.log(values);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setisDataValid(true);
      resetForm();
    }
  };

  return (
    <FormField onSubmit={handleSubmit}>
      <Card>
        <Grid container>
          <Grid item xs={6}>
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
                <Grid item xs={6}>
                  <TextInputField
                    error={errors.firstName}
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    onChange={handleChange}
                    placeholder="John"
                    required={true}
                    value={values.firstName}
                    variant="outlined"
                    onBlur={validate}
                  />
                  <TextInputField
                    error={errors.lastName}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Smith"
                    required={true}
                    value={values.lastName}
                    variant="outlined"
                    onBlur={validate}
                  />
                  <TextInputField
                    error={errors.email}
                    id="email"
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    placeholder="johnsmith@gmail.com"
                    required={true}
                    value={values.email}
                    variant="outlined"
                    onBlur={validate}
                  />
                  <TextInputField
                    error={errors.phone}
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    onChange={handleChange}
                    placeholder="10009"
                    required={true}
                    value={values.phone}
                    variant="outlined"
                    onBlur={validate}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextInputField
                    error={errors.street1}
                    id="street1"
                    label="Address"
                    name="street1"
                    onChange={handleChange}
                    placeholder="3928 Broadway Ave."
                    required={true}
                    value={values.street1}
                    variant="outlined"
                    onBlur={validate}
                  />
                  <TextInputField
                    error={errors.street2}
                    id="street2"
                    label="Address 2"
                    name="street2"
                    onChange={handleChange}
                    placeholder="Apt 3B"
                    value={values.street2}
                    variant="outlined"
                    onBlur={validate}
                  />
                  <TextInputField
                    error={errors.city}
                    id="city"
                    label="City"
                    name="city"
                    onChange={handleChange}
                    placeholder="New York"
                    required={true}
                    value={values.city}
                    variant="outlined"
                    onBlur={validate}
                  />
                  <SelectField
                    error={errors.state}
                    id="state"
                    label="State"
                    name="state"
                    onChange={handleChange}
                    placeholder="NY"
                    required={true}
                    value={values.state}
                    options={stateArr}
                  />
                  <TextInputField
                    error={errors.zip}
                    id="zip"
                    label="Zip Code"
                    name="zip"
                    onChange={handleChange}
                    placeholder="10009"
                    required={true}
                    value={values.zip}
                    variant="outlined"
                    onBlur={validate}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomButton
                    color={'primary'}
                    variant={'contained'}
                    disabled={isDataValid}
                    size={'large'}
                    onClick={handleSubmit}
                    text={'Next'}
                  />
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Card>
    </FormField>
  );
}

export default UserContactInputForm;
