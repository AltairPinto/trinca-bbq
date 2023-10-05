import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
    .matches(/\d/, 'Senha deve conter pelo menos um número'),
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('Digite um e-mail válido'),
});

export const loginValidation = yupResolver(validationSchema);
