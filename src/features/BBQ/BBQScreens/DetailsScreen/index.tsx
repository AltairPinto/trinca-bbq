import {
  Container,
  Content,
  Counter,
  Header,
  HeaderText,
  Title,
  Date,
  HeaderAmounts,
  Body,
  Left,
  Right,
  BackContainer,
} from './styled';

import Image from 'next/image';
import { formatToReais } from 'utils/currencyUtils';
import { formatDateToDDMM } from 'utils/dateUtils';
import { Guest } from './components/Guest';
import { BBQEvent } from 'features/BBQ/BBQtypes';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Typography } from 'components/Typography';
import { Modal } from 'components/Modal';
import { useMemo, useState } from 'react';
import { GuestForm } from 'features/BBQ/BBQForms/GuestForm';
import { EventRemove } from './components/EventRemove';
import { useRouter } from 'next/router';

const DetailsScreen = ({
  id,
  date,
  title,
  observation,
  amount,
  amountWithBeer,
}: BBQEvent) => {
  const { guests } = useSelector((state: RootState) => state.bbq.events).find(
    (e) => e.id === id,
  );

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBBQ, setIsOpenBBQ] = useState(false);

  const totalAmount = useMemo(
    () =>
      guests?.reduce((total, person) => {
        return total + person?.amount;
      }, 0),
    [guests],
  );

  const paidAmount = useMemo(
    () =>
      guests?.reduce((total, person) => {
        if (person.confirmed) return total + person?.amount;
        return total;
      }, 0),
    [guests],
  );

  const confirmedGuests = useMemo(
    () =>
      guests?.reduce((total, person) => {
        if (person.confirmed) return total + 1;
        return total;
      }, 0),
    [guests],
  );

  return (
    <>
      <Container>
        <BackContainer onClick={() => router.push('/bbq')}>
          <Image
            src="/icons/icon_arrow_back.svg"
            alt="Arrow back icon"
            width={18}
            height={15}
            loading="lazy"
          />
          <Typography>Voltar</Typography>
        </BackContainer>
        <Header>
          <HeaderText>
            <Date variant="h2">{formatDateToDDMM(date)}</Date>
            <Title>{title}</Title>
            {observation && <Typography>Observação: {observation}</Typography>}
          </HeaderText>
          <HeaderAmounts>
            <Content>
              <Image
                src="/icons/icon_people.svg"
                alt="People icon"
                width={18}
                height={15}
                loading="lazy"
              />
              <Counter>
                {confirmedGuests} / {guests?.length}
              </Counter>
            </Content>
            <Content>
              <Image
                src="/icons/icon_money.svg"
                alt="Money icon"
                width={18}
                height={15}
                loading="lazy"
              />
              <Counter>
                {formatToReais(paidAmount)} / {formatToReais(totalAmount)}
              </Counter>
            </Content>
          </HeaderAmounts>
        </Header>
        <Left>
          <Typography
            variant="span"
            color="secondary"
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(true)}
          >
            + Adicionar participante
          </Typography>

          <Right onClick={() => setIsOpenBBQ(true)}>
            <Image
              src="/icons/icon_trash.svg"
              alt="Remove event icon"
              width={25}
              height={25}
              loading="lazy"
              style={{ cursor: 'pointer' }}
            />
            <Typography color="error">Cancelar Churras</Typography>
          </Right>
        </Left>

        <Body>
          {guests.map((guest, key) => (
            <Guest key={key} eventId={id} {...guest} />
          ))}
        </Body>
      </Container>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <GuestForm
          onClose={() => setIsOpen(false)}
          eventId={id}
          amount={amount}
          amountWithBeer={amountWithBeer}
        />
      </Modal>
      <Modal isOpen={isOpenBBQ} onClose={() => setIsOpenBBQ(false)}>
        <EventRemove
          eventId={id}
          name={title}
          onClose={() => setIsOpenBBQ(false)}
        />
      </Modal>
    </>
  );
};

export { DetailsScreen };
