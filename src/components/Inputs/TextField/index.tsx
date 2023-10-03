import { forwardRef } from 'react';
import { Container, Input } from './styles';
import { Typography } from 'components/Typography';

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
  helperText?: string;
  required?: boolean;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      placeholder,
      error,
      onFocus,
      onBlur,
      helperText,
      required,
      ...props
    },
    ref,
  ) => {
    return (
      <Container>
        {label && <Typography variant="label">{label}</Typography>}
        <Input
          ref={ref}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          error={error}
          required={required}
          {...props}
        />
        {error && (
          <Typography variant="p" color="error">
            {helperText}
          </Typography>
        )}
      </Container>
    );
  },
);

TextField.displayName = 'TextField';

export { TextField, type TextFieldProps };
