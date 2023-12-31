import React from 'react';
import { StyleInput } from './input.styles';

const Input = ({
  placeholder,
  hasError,
  isValid,
  required,
  name,
  type,
  value,
  onChange,
}) => {
  const variantes = {
    error: `2px solid red`,
    valid: `2px solid green`,
  };

  return (
    <StyleInput
      name={name}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        border: isValid ? variantes.valid : hasError ? variantes.error : '',
      }}
      required={required}
      placeholder={placeholder}
    />
  );
};

export default Input;
