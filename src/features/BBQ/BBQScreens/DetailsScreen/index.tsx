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

const DetailsScreen = ({ id, date, title }: BBQEvent) => {
  const { guests } = useSelector((state: RootState) => state.bbq.events).find(
    (e) => e.id === id,
  );

  const totalAmount = guests?.reduce((total, person) => {
    return total + person.amount;
  }, 0);

  return (
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
      <Body>
        {guests.map((guest, key) => (
          <Guest key={key} eventId={id} {...guest} />
        ))}
      </Body>
    </Container>
  );
};

export { DetailsScreen };
