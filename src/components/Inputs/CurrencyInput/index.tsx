import { useState } from 'react';
import { TextField } from '../TextField';

type CurrencyInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
  setFinalValue: (value) => void;
};

const CurrencyInput = (props: CurrencyInputProps) => {
  const [value, setValue] = useState(props.value || '');

  const formatToReais = (str) => {
    const cleaned = ('' + str).replace(/\D/g, '');
    const amount = parseInt(cleaned, 10) / 100;
    return amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(formatToReais(inputValue));
    props.setFinalValue(formatToReais(inputValue));
  };

  return <TextField {...props} value={value} onChange={handleChange} />;
};

export { CurrencyInput };
