import React, { useState } from 'react';
import { Snackbar, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Cancel } from '@material-ui/icons';

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
  const [open, setOpen] = useState(false);
  const { autoHideDuration, severity, handleClose, errorMessage } = props;

  return (
    <div className={classes.root}>
      <div>
        <Button onClick={handleClose}>
          <Alerts autoHideDuration={autoHideDuration} onClose={handleClose} severity={severity}>
            {errorMessage}
          </Alerts>
        </Button>
      </div>
    </div>
  );
}
