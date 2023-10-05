import { Button } from 'components/Button';
import { ActionContainer, Form } from './styles';
import { TextField } from 'components/Inputs/TextField';
import { useForm } from 'react-hook-form';
import { guestValidation } from './validationSchema';
import { useDispatch } from 'react-redux';
import { addGuest } from 'ducks/bbqSlice';
import { useCallback, useState } from 'react';
import { v4 } from 'uuid';
import { Checkbox } from 'components/Inputs/Checkbox';
import { CurrencyInput } from 'components/Inputs/CurrencyInput';

interface IGuestForm {
  onClose: () => void;
  eventId: string;
}

const GuestForm: React.FC<IGuestForm> = ({ onClose, eventId }) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      id: v4(),
      name: '',
      withBeer: false,
      amount: '0',
      confirmed: false,
    },
    resolver: guestValidation,
  });

  const dispatch = useDispatch();

  const [withBeer, setWithBeer] = useState(getValues('withBeer'));

  const onSubmit = useCallback(
    (guest) => {
      dispatch(addGuest({ eventId, guest }));
      onClose();
    },
    [dispatch, eventId, onClose],
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="name"
        label="Nome"
        placeholder="nome do participante"
        error={Boolean(errors.name)}
        helperText={String(errors.name?.message)}
        {...register('name')}
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
      <Checkbox
        checked={withBeer}
        onClick={() => {
          setValue('withBeer', !withBeer);
          setWithBeer(!withBeer);
        }}
        name="withBeer"
        title="Incluir bebida?"
        error={Boolean(errors.withBeer)}
        helperText={String(errors.withBeer?.message)}
        {...register('withBeer')}
      />

      <ActionContainer>
        <Button onClick={onClose}>Cancelar</Button>
        <Button type="submit" disabled={!isValid}>
          Cadastrar
        </Button>
      </ActionContainer>
    </Form>
  );
};

export { GuestForm };
