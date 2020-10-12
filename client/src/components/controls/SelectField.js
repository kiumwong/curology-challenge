import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';

function SelectField(props) {
  const { error, id, label, name, onChange, onBlur, options, value, x, y } = props;

  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <Select
        id={id}
        label={label}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        options={options}
      >
        <MenuItem value="None"></MenuItem>
        {options.map((item) => (
          <MenuItem key={item.name} value={item.name}>
            {item.abbreviation}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

export default SelectField;
