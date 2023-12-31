import { Button } from 'components/Button';
import { Form } from './styles';
import { TextField } from 'components/Inputs/TextField';
import { useForm } from 'react-hook-form';
import { loginValidation } from './validationSchema';
import { useDispatch } from 'react-redux';
import { login } from 'ducks/authSlice';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

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
      if (email === 'trinca@email.com' && password === 'a1b2c3d4e5') {
        dispatch(login({ id: 1, name: 'Trinca' }));
        return router.push('/bbq');
      }
      return toast.error('Dados incorretos');
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
        data-testId="email"
      />
      <TextField
        name="password"
        label="Senha"
        placeholder="senha"
        type="password"
        error={Boolean(errors.password)}
        helperText={String(errors.password?.message)}
        {...register('password')}
        data-testId="password"
      />
      <Button type="submit" disabled={!isValid} data-testId="btnLogin">
        Entrar
      </Button>
    </Form>
  );
};

export { LoginForm };
