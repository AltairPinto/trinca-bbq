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

const DetailsScreen = ({ id, date, title }: BBQEvent) => {
  const { guests } = useSelector((state: RootState) => state.bbq.events).find(
    (e) => e.id === id,
  );

  const [isOpen, setIsOpen] = useState(false);

  const totalAmount = useMemo(
    () =>
      guests?.reduce((total, person) => {
        return total + person?.amount;
      }, 0),
    [guests],
  );

  return (
    <>
      <Container>
        <Header>
          <HeaderText>
            <Date variant="h2">{formatDateToDDMM(date)}</Date>
            <Title>{title}</Title>
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
              <Counter>{guests?.length}</Counter>
            </Content>
            <Content>
              <Image
                src="/icons/icon_money.svg"
                alt="Money icon"
                width={18}
                height={15}
                loading="lazy"
              />
              <Counter>{formatToReais(totalAmount)}</Counter>
            </Content>
          </HeaderAmounts>
        </Header>
        <Typography
          variant="span"
          color="secondary"
          style={{ cursor: 'pointer' }}
          onClick={() => setIsOpen(true)}
        >
          + Adicionar participante
        </Typography>
        <Body>
          {guests.map((guest, key) => (
            <Guest key={key} eventId={id} {...guest} />
          ))}
        </Body>
      </Container>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <GuestForm onClose={() => setIsOpen(false)} eventId={id} />
      </Modal>
    </>
  );
};

export { DetailsScreen };
