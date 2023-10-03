import { Button } from 'components/Button';
import { ActionContainer, Form } from './styles';
import { TextField } from 'components/Inputs/TextField';
import { useForm } from 'react-hook-form';
import { loginValidation } from './validationSchema';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: loginValidation,
  });

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="email"
        label="Login"
        placeholder="e-mail"
        error={Boolean(errors.email)}
        helperText={String(errors.email?.message)}
        {...register('email')}
      />
      <TextField
        name="password"
        label="Senha"
        placeholder="senha"
        type="password"
        error={Boolean(errors.password)}
        helperText={String(errors.password?.message)}
        {...register('password')}
      />
      <ActionContainer>
        <Button type="submit" disabled={!isValid}>
          Entrar
        </Button>
      </ActionContainer>
    </Form>
  );
};

export { LoginForm };
