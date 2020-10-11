import React from 'react';
import { Button, Card, CardHeader, Grid, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import '../App.css';

function UserOrderForm(props) {
  return (
    <div className='Input'>
        <Grid container direction='row' justify='center' spacing={10}> 
          <Grid item xs={12} sm={12} md={8}>
            <Card>
              <Grid container>
              <Grid item xs={12} sm={6} md={5}>
              <FormControl>
                <InputLabel htmlFor="my-input" required={true}>Quantity</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" placeholder="2322 2322 23232"/>
                <FormHelperText id="my-helper-text">Required</FormHelperText>
              </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={5}>
              <FormControl>
                <InputLabel htmlFor="my-input" required={true}>Expiration Date</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" placeholder="02/25"/>
                <FormHelperText id="my-helper-text">Required</FormHelperText>
              </FormControl>
              </Grid>
            </Grid>
            <Grid container direction='row' justify='center'>
            <Grid item xs={12} sm={12} md={5}>
            <Button color={'primary'} variant={'contained'} disabled={false} size={'large'}>Save</Button>
            </Grid>
            </Grid>
           </Card>
          </Grid>
        </Grid>
    </div>
  );
}

export default UserOrderForm;