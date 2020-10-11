import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, Card, CardHeader, Grid, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import '../App.css';

function UserContactInputForm(props) {
  return (
    <div className='Input'>
        <Grid container direction='row' justify='center' spacing={10}> 
          <Grid item xs={6} sm={6} md={6}>
            <Card>
              <Accordion>
              <AccordionSummary expandIcon={'+'} aria-controls="panel1a-content" id="panel1a-header">
              <CardHeader style={{ color: '#fff' }} title={'Contact Information'}></CardHeader>
              </AccordionSummary>
              <AccordionDetails>
              <Grid container>
              <Grid item xs={6} sm={6} md={5}>
              <FormControl>
                <InputLabel htmlFor="my-input" required={true}>First Name</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" placeholder="Kiu"/>
                <FormHelperText id="my-helper-text">Required</FormHelperText>
              </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={5}>
              <FormControl>
                <InputLabel htmlFor="my-input" required={true}>Last Name</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" placeholder="Wong"/>
                <FormHelperText id="my-helper-text">Required</FormHelperText>
              </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={5}>
              <FormControl>
                <InputLabel htmlFor="my-input" required={true}>Email Address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" placeholder="Kiu"/>
                <FormHelperText id="my-helper-text">Required</FormHelperText>
              </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={5}>
              <FormControl>
                <InputLabel htmlFor="my-input" required={true}>Address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" placeholder="Kiu"/>
                <FormHelperText id="my-helper-text">Required</FormHelperText>
              </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={5}>
              <FormControl>
                <InputLabel htmlFor="my-input" required={true}>Address 2</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" placeholder="Kiu"/>
                <FormHelperText id="my-helper-text">Required</FormHelperText>
              </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
              <FormControl>
                <InputLabel htmlFor="my-input" required={true}>City</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" placeholder="Kiu"/>
                <FormHelperText id="my-helper-text">Required</FormHelperText>
              </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
              <FormControl>
                <InputLabel htmlFor="my-input" required={true}>State</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" placeholder="Kiu"/>
                <FormHelperText id="my-helper-text">Required</FormHelperText>
              </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={5}>
              <FormControl>
                <InputLabel htmlFor="my-input" required={true}>Zip Code</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" placeholder="Kiu"/>
                <FormHelperText id="my-helper-text">Required</FormHelperText>
              </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={5}>
            <Button color={'primary'} variant={'contained'} disabled={false} size={'large'}>Save</Button>
            </Grid>
            </AccordionDetails>
            </Accordion>
           </Card>
          </Grid>
        </Grid>
    </div>
  );
}

export default UserContactInputForm;