import { Button } from 'components/Button';
import { ActionContainer, AmountContainer, Form } from './styles';
import { TextField } from 'components/Inputs/TextField';
import { useForm } from 'react-hook-form';
import { guestValidation } from './validationSchema';
import { useDispatch } from 'react-redux';
import { addGuest } from 'ducks/bbqSlice';
import { useCallback, useState } from 'react';
import { v4 } from 'uuid';
import { Checkbox } from 'components/Inputs/Checkbox';
import { CurrencyInput } from 'components/Inputs/CurrencyInput';
import { formatToReais } from 'utils/currencyUtils';

interface GuestFormProps {
  onClose: () => void;
  eventId: string;
  amount: number;
  amountWithBeer: number;
}

const GuestForm = ({
  onClose,
  eventId,
  amount,
  amountWithBeer,
}: GuestFormProps) => {
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
      amount: formatToReais(amount),
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
      <AmountContainer>
        <CurrencyInput
          name="amount"
          label="Valor sugerido"
          placeholder="valor sugerido"
          error={Boolean(errors.amount)}
          helperText={String(errors.amount?.message)}
          setFinalValue={(value) => setValue('amount', value)}
          value={getValues('amount')}
          {...register('amount')}
        />
      </AmountContainer>
      <Checkbox
        checked={withBeer}
        onClick={() => {
          setValue('withBeer', !withBeer);
          setWithBeer(!withBeer);
        }}
        name="withBeer"
        title={`Bebida inclusa? +${formatToReais(amountWithBeer)}`}
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
