import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
  id: yup.string(),
  name: yup.string().required('Nome é obrigatório'),
  withBeer: yup.boolean().required('Escolha se é com ou sem bebida'),
  amount: yup.string().required('Escolha o valor sugerido'),
  confirmed: yup.boolean(),
});

export const guestValidation = yupResolver(validationSchema);
