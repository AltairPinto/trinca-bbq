import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
  id: yup.string(),
  title: yup.string().required('Nome é obrigatório'),
  date: yup.date().required('Data é obrigatória'),
  amount: yup.string().required('Escolha o valor sugerido'),
  amountWithBeer: yup.string().required('Escolha o valor sugerido com bebida'),
  observation: yup.string(),
});

export const eventValidation = yupResolver(validationSchema);
