import { Button } from 'components/Button';
import { ActionContainer, Form } from './styles';
import { TextField } from 'components/Inputs/TextField';
import { useForm } from 'react-hook-form';
import { eventValidation } from './validationSchema';
import { useDispatch } from 'react-redux';
import { createEvent } from 'ducks/bbqSlice';
import { useCallback } from 'react';
import { v4 } from 'uuid';
import { CurrencyInput } from 'components/Inputs/CurrencyInput';
import { Guest } from 'features/BBQ/BBQtypes';

interface EventFormProps {
  onClose: () => void;
}

const EventForm = ({ onClose }: EventFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      id: v4(),
      title: '',
      date: new Date(),
      amountWithBeer: '',
      amount: '0',
      observation: '',
    },
    resolver: eventValidation,
  });

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (event) => {
      dispatch(createEvent({ ...event, guests: [] as Guest[] }));
      onClose();
    },
    [dispatch, onClose],
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="title"
        label="Nome do evento"
        placeholder="nome do evento"
        error={Boolean(errors.title)}
        helperText={String(errors.title?.message)}
        {...register('title')}
        fullWidth
      />
      <TextField
        name="date"
        label="Data"
        placeholder="data do evento"
        error={Boolean(errors.date)}
        type="date"
        helperText={String(errors.date?.message)}
        {...register('date')}
        fullWidth
      />
      <CurrencyInput
        name="amount"
        label="Valor sugerido"
        placeholder="valor sugerido"
        error={Boolean(errors.amount)}
        helperText={String(errors.amount?.message)}
        setFinalValue={(value) => setValue('amount', value)}
        {...register('amount')}
      />
      <CurrencyInput
        name="amountWithBeer"
        label="Adicional para bebida inclusa"
        placeholder="Adicional para bebida inclusa"
        error={Boolean(errors.amountWithBeer)}
        helperText={String(errors.amountWithBeer?.message)}
        setFinalValue={(value) => setValue('amountWithBeer', value)}
        {...register('amountWithBeer')}
      />
      <TextField
        name="observation"
        label="Observações"
        placeholder="observações"
        error={Boolean(errors.observation)}
        helperText={String(errors.observation?.message)}
        {...register('observation')}
        fullWidth
      />
      <ActionContainer>
        <Button onClick={onClose}>Cancelar</Button>
        <Button type="submit" disabled={!isValid} color="secondary">
          Cadastrar
        </Button>
      </ActionContainer>
    </Form>
  );
};

export { EventForm };
