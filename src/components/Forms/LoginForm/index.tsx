import { Button } from 'components/Button';
import { Container } from './styles';
import { TextField } from 'components/Inputs/TextField';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Login"
        placeholder="e-mail"
        {...register('email', {
          required: 'Email é obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Email inválido',
          },
        })}
        error={Boolean(errors.email)}
        helperText={String(errors.email?.message)}
      />
      <br />
      <TextField
        label="Senha"
        placeholder="senha"
        type="password"
        {...register('password', {
          required: 'Senha é obrigatória',
          minLength: {
            value: 6,
            message: 'A senha deve ter pelo menos 6 caracteres',
          },
        })}
      />
      <br />
      <Button type="submit">Entrar</Button>
    </Container>
  );
};

export { LoginForm };
