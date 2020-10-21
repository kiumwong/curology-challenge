import React from 'react';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alerts(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function MessageAlert(props) {
  const classes = useStyles();
  const { severity, handleClose, errorMessage } = props;

  return (
    <div className={classes.root}>
      <div>
        <Button onClick={handleClose}>
          <Alerts severity={severity}>{errorMessage}</Alerts>
        </Button>
      </div>
    </div>
  );
}
