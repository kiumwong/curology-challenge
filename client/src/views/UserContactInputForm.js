import React, { useState } from 'react';
import PropTypes from "prop-types";

import { Accordion, AccordionSummary, AccordionDetails, Button, Card, CardHeader, Grid, FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';

import '../App.css';
import stateArr from '../variables/states';

function UserContactInputForm(props) {
  const [inputData , setInputData] = useState({
    city: '', email: '', firstName: '', lastName: '', phone: '', state: '', street1: '', street2: '', zip: ''});
  const [ errorMessage , setErrorMessage ] = useState({messageCity: '', messageEmail: '', messageFirstName: '', messageLastName: '', messagePhone: '', messageState: '', messageStreet1: '', messageStreet2: '', messageZip: ''});

  // console.log(inputData);
  // console.log(props);
  // console.log(stateArr);
  // console.log(inputError.errorCity);
  // setInputError([error.city: true])

  const handleChange = (e) => {
    setInputData({ 
      ...inputData, 
      [ e.target.name ] : e.target.value 
    })
  }

  const validate = (info) => {
    const { city, email, firstName, lastName, phone, state, street1, street2, zip } = inputData;
    const { messageCity, messageEmail, messageFirstName, messageLastName, messagePhone, messageState, messageStreet1, messageStreet2, messageZip } = errorMessage;

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(errorMessage)
    console.log(inputData);
    console.log(firstName);
    // console.log(state);
    
  
        if (!firstName) {
          setErrorMessage({...errorMessage, messageFirstName: 'First name is required.'})
        } 
      
        if (!lastName) {
          setErrorMessage({...errorMessage, messageLastName: 'Last Name is required.'})
        } 

      // if (!email || !emailRegex.test(email.toLowerCase())) {
      //   setInputError({errorEmail: true});
      //   setErrorMessage({messageEmail: 'Invalid Email.'})
      // } else {
      //   setInputError({errorEmail: false});
      // }

  };

  return (
    <div className='Input'>
            <Card>
              <Accordion>
              <AccordionSummary style={{ backgroundColor: 'rgb(51, 46, 84)' }} expandIcon={'+'} aria-controls='#' id='#'>
              <CardHeader 
                style={{ color: '#fff' }} 
                title='Contact Information'/>
              </AccordionSummary>
              <AccordionDetails>
                <TextField
                  error={errorMessage.messageFirstName}
                  helperText={errorMessage.messageFirstName ? errorMessage.messageFirstName : ''}
                  id='firstName'
                  label='First Name'
                  name='firstName'
                  onChange={handleChange}
                  placeholder='Kiu'
                  required
                  value={inputData.firstName}
                  variant='outlined'
                  onBlur={() => validate()}
                />
                <TextField
                  error={errorMessage.messageLastName}
                  helperText={errorMessage.messageLastName ? errorMessage.messageLastName : ''}
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  onChange={handleChange}
                  placeholder='Kiu'
                  required
                  value={inputData.lastName}
                  variant='outlined'
                  onBlur={() => validate('lastName')}
                />
                <TextField
                  error={errorMessage.messageEmail}
                  helperText={errorMessage.messageEmail ? errorMessage.messageEmail: 'hello'}
                  id='email'
                  label='Email'
                  name='email'
                  onChange={handleChange}
                  placeholder='hello@gmail.com'
                  required
                  value={inputData.email}
                  variant='outlined'
                />
                <TextField
                  error={inputData.error}
                  helperText={inputData.error ? inputData.errorMessage : 'hello'}
                  id='street1'
                  label='Address'
                  name='street1'
                  onChange={handleChange}
                  placeholder='123 Smart St.'
                  required
                  value={inputData.street1}
                  variant='outlined'
                />
                <TextField
                  error={inputData.error}
                  helperText={inputData.error ? inputData.errorMessage : 'hello'}
                  id='street2'
                  label='Apartment / Other'
                  name='street2'
                  onChange={handleChange}
                  placeholder='Unit 2'
                  required
                  value={inputData.street2}
                  variant='outlined'
                />
                <TextField
                  error={inputData.error}
                  helperText={inputData.error ? inputData.errorMessage : 'hello'}
                  id='city'
                  label='City'
                  name='city'
                  onChange={handleChange}
                  placeholder='New York'
                  required
                  value={inputData.city}
                  variant='outlined'
                />
                <TextField
                  error={inputData.error}
                  helperText={inputData.error ? inputData.errorMessage : 'hello'}
                  id='state'
                  label='State'
                  name='state'
                  onChange={handleChange}
                  placeholder='New York'
                  required
                  select
                  SelectProps={{ native: true }}
                  value={inputData.state}
                  variant='outlined'
                  >
                    <option aria-label='None' value=''/>
                    {stateArr.map((state) =>  <option>{state.abbreviation}</option>)}
                  </TextField>
                <TextField
                  error={inputData.error}
                  helperText={inputData.error ? inputData.errorMessage : 'hello'}
                  id='zip'
                  label='Zip Code'
                  name='zip'
                  onChange={handleChange}
                  placeholder='10009'
                  required
                  value={inputData.zip}
                  variant='outlined'
                />
                <TextField
                  error={inputData.error}
                  helperText={inputData.error ? inputData.errorMessage : 'hello'}
                  id='phone'
                  label='Phone Number'
                  name='phone'
                  onChange={handleChange}
                  placeholder='917-234-1203'
                  required
                  value={inputData.phone}
                  variant='outlined'
                />
                <Button 
                  color={'primary'} 
                  variant={'contained'} 
                  disabled={false} 
                  >Continue</Button>
            </AccordionDetails>
            </Accordion>
           </Card>
    </div>
  );
}

export default UserContactInputForm;