import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

function CustomButton(props) {
  const { color, text, size, variant, onClick, disabled, href, ...other } = props;
  const classes = useStyles();

  return (
    <Button
      href={href}
      color={color || 'primary'}
      variant={variant || 'contained'}
      size={size || 'large'}
      onClick={onClick}
      disabled={disabled}
      {...other}
      classes={{ root: classes.root }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
