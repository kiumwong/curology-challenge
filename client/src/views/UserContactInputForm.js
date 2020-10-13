import React, { useState } from 'react';

import { Accordion, AccordionSummary, AccordionDetails, Card, CardHeader, Grid } from '@material-ui/core';
import CustomButton from '../components/controls/CustomButton';
import SelectField from '../components/controls/SelectField';
import TextInputField from '../components/controls/TextInputField';
import FormField from '../components/controls/FormField';

import useValidateForm from '../actions/useValidateForm';

import initialValues from '../variables/initialValues';
import stateArr from '../variables/states';

function UserContactInputForm(props) {
  const [isDataValid, setisDataValid] = useState(true);

  const validate = (fieldValues = values) => {
    let err = { ...errors };

    if ('firstName' in fieldValues) {
      err.firstName = fieldValues.firstName ? '' : 'This field is required.';
    }
    if (typeof fieldValues['firstName'] in fieldValues === 'string') {
      err.firstNameType = fieldValues.firstName ? '' : 'Not a string';
    }

    if ('lastName' in fieldValues) {
      err.lastName = fieldValues.lastName ? '' : 'This field is required.';
    }
    if (typeof fieldValues['lastName'] in fieldValues === 'string') {
      err.lastNameType = fieldValues.lastName ? '' : 'Not a string';
    }

    if ('email' in fieldValues) {
      err.email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        fieldValues.email,
      )
        ? ''
        : 'Email is not valid.';
    }
    if (typeof fieldValues['email'] in fieldValues === 'string') {
      err.emailType = fieldValues.email ? '' : 'Not a string';
    }

    if ('phone' in fieldValues) {
      err.phone = fieldValues.phone.length > 9 ? '' : 'Minimum 10 numbers required.';
    }
    if (typeof fieldValues['phone'] in fieldValues === 'string') {
      err.phoneType = fieldValues.phone ? '' : 'Not a string';
    }

    if ('street1' in fieldValues) {
      err.street1 = fieldValues.street1 ? '' : 'This field is required.';
    }
    if (typeof fieldValues['street1'] in fieldValues === 'string') {
      err.street1Type = fieldValues.street1 ? '' : 'Not a string';
    }

    if (typeof fieldValues['street2'] in fieldValues === 'string') {
      err.street2Type = fieldValues.street2 ? '' : 'Not a string';
    }

    if ('city' in fieldValues) {
      err.city = fieldValues.city ? '' : 'This field is required.';
    }
    if (typeof fieldValues['city'] in fieldValues === 'string') {
      err.cityType = fieldValues.city ? '' : 'Not a string';
    }

    if ('state' in fieldValues) {
      err.state = fieldValues.state ? '' : 'This field is required.';
    }
    if (typeof fieldValues['state'] in fieldValues === 'string') {
      err.stateType = fieldValues.state ? '' : 'Not a string';
    }

    if ('zip' in fieldValues) {
      err.zip = fieldValues.zip.length >= 5 ? '' : 'Minimum 5 numbers required.';
    }
    if (typeof fieldValues['zip'] in fieldValues === 'string') {
      err.zipType = fieldValues.zip ? '' : 'Not a string';
    }

    setErrors({ ...err });

    if (fieldValues === values) {
      return Object.values(err).every((x) => x == '');
    }
  };

  const { values, setValues, errors, setErrors, handleChange, resetForm } = useValidateForm(
    initialValues,
    true,
    validate,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const requestBody = JSON.stringify({
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        address: {
          street1: values.street1,
          street2: values.street2,
          city: values.city,
          state: values.state,
          zip: values.zip,
        },
      });
      localStorage.setItem('userData', JSON.stringify(requestBody));
      const userData = JSON.parse(localStorage.getItem('userData'));
      console.log(JSON.parse(userData));
    }
  };

  return (
    <FormField onSubmit={handleSubmit}>
      <Card>
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
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
                <Grid item xs={6} sm={6} md={4}>
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
                    onBlur={handleChange}
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
                    onBlur={handleChange}
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
                    onBlur={handleChange}
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
                    onBlur={handleChange}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
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
                    onBlur={handleChange}
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
                    onBlur={handleChange}
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
                    onBlur={handleChange}
                  />
                  <SelectField
                    error={errors.state}
                    id="state"
                    label="State"
                    name="state"
                    onChange={handleChange}
                    required={true}
                    select={true}
                    value={values.state}
                    onBlur={handleChange}
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
                    onBlur={handleChange}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <CustomButton
                    color={'primary'}
                    variant={'contained'}
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
