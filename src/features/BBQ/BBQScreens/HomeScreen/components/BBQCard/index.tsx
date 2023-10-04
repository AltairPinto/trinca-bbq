import { formatDateToDDMM } from 'utils/dateUtils';
import {
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
import { Card } from 'components/Card';

interface CardProps {
  key: string | number;
  date: Date;
  title: string;
  totalAmount: number;
  totalGuests: number;
  onClick: () => void;
}

const BBQCard = ({
  key,
  date,
  title,
  totalGuests,
  totalAmount,
  onClick,
}: CardProps) => {
  return (
    <Card key={key} onClick={onClick}>
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
    </Card>
  );
};

export { BBQCard };
