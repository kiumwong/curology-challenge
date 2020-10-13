import React, { useState } from 'react';
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

import initialValues from '../variables/initialValues';

function UserPaymentInputForm(props) {
  const validate = (fieldValues = values) => {
    let err = { ...errors };

    if ('ccNum' in fieldValues) {
      err.ccNum = /\b(?:3[47]\d{2}([\s-]?)\d{6}\1\d|(?:(?:4\d|5[1-5]|65)\d{2}|6011)([\s-]?)\d{4}\2\d{4}\2)\d{4}\b/.test(
        fieldValues.ccNum)
        ? ''
        : 'Credit card number is not valid.';
    }
    if ('exp' in fieldValues) {
      err.exp = /^((0[1-9])|(1[0-2]))\/((2009)|(20[1-2][0-9]))$/.test(fieldValues.exp) ? '' : 'Expiration date is invalid.';
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
        payment: {
          ccNum: values.ccNum,
          exp: values.exp,
        }
      });
      localStorage.setItem('paymentData', JSON.stringify(requestBody));

      const userData = JSON.parse(localStorage.getItem('paymentData'));
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
                <CardHeader style={{ color: '#fff' }} title="Payment Information" />
              </AccordionSummary>
              <AccordionDetails>
                <Grid item xs={6} sm={6} md={4}>
                  <TextInputField
                    error={errors.ccNum}
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

export default UserPaymentInputForm;
