import { Button } from 'components/Button';
import { ActionContainer, Form } from './styles';
import { TextField } from 'components/Inputs/TextField';
import { useForm } from 'react-hook-form';
import { loginValidation } from './validationSchema';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailed } from 'ducks/authSlice';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

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

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = useCallback(
    ({ email, password }) => {
      if (email === 'altair@email.com' && password === 'a1b2c3d4e5') {
        dispatch(loginSuccess({ id: 1, name: 'Altair' }));
        return router.push('/bbq');
      }
      return dispatch(loginFailed('Dados incorretos'));
    },
    [dispatch, router],
  );

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
