import { formatDateToDDMM } from 'utils/dateUtils';
import {
  Container,
  Content,
  Counter,
  Date,
  Footer,
  FooterContent,
  Header,
  Title,
} from './styles';
import Image from 'next/image';
import { formatToReais } from 'utils/currencyUtils';

interface Card {
  id: string;
  date: Date;
  title: string;
  totalGuests: number;
  totalAmount: number;
}

const Card = ({ id, date, title, totalGuests, totalAmount }: Card) => {
  return (
    <Container id={id}>
      <Header>
        <Date variant="h2">{formatDateToDDMM(date)}</Date>
        <Title variant="span">{title}</Title>
      </Header>
      <Footer>
        <FooterContent>
          <Content>
            <Image
              src="/icons/icon_people.svg"
              alt="People icon"
              width={18}
              height={15}
              loading="lazy"
            />
            <Counter>{totalGuests}</Counter>
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
        </FooterContent>
      </Footer>
    </Container>
  );
};

export { Card };
