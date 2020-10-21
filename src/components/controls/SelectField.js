import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { TextField, MenuItem } from '@material-ui/core';

function SelectField(props) {
  const {
    error = null,
    defaultValue,
    id,
    label,
    name,
    onChange,
    onBlur,
    options,
    placeholder,
    required,
    select,
    style,
    value,
  } = props;

  return (
    <TextField
      id={id}
      style={style}
      defaultValue={defaultValue}
      label={label}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      select={select}
      required={required}
      variant="outlined"
      options={options}
      {...(error && { error: true, helperText: error })}
    >
      <MenuItem value={defaultValue}>{defaultValue}</MenuItem>
      {options.map((item) => (
        <MenuItem key={item.id} value={item.name}>
          {item.name}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default SelectField;
