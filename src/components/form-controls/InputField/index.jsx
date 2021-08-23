import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { control } = form;
  // const hasError = errors[name];
  // const hasError = formState.touched[name] && errors[name];
  // console.log(errors[name], formState.touched[name]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: {invalid, error}}) => (
        <TextField
          margin="normal"
          variant="outlined"
          fullwidth
          label={label}
          disabled={disabled}
          error={invalid} 
          helperText={error?.message}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
}
export default InputField;
