import { ReactNode } from 'react';
import { Container, Content, Footer, BackgroundImage } from './styles';
import { Typography } from 'components/Typography';
import Image from 'next/image';

interface BBQLayoutProps {
  children: ReactNode;
}

const BBQLayout = ({ children }: BBQLayoutProps) => {
  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Typography variant="h1">Agenda de Churras</Typography>
        {children}
        <Footer>
          <Image
            src="/images/trinca.svg"
            alt="Trinca Logo"
            width={48}
            height={48}
            loading="lazy"
          />
        </Footer>
      </Content>
    </Container>
  );
};

export { BBQLayout };
