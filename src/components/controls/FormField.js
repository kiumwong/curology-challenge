import React from 'react';

function FormField(props) {
  const { onSubmit, children, ...other } = props;
  return (
    <form autoComplete="off" onSubmit={onSubmit} {...other}>
      {props.children}
    </form>
  );
}

export default FormField;
