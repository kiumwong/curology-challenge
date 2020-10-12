import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

function TextInputField(props) {
  const { error, id, label, name, onChange, onBlur, placeholder, required, value } = props;

  console.log(props);

  return (
    <TextField
      id={id}
      label={label}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      variant="outlined"
      onBlur={onBlur}
      required={required}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export default TextInputField;
