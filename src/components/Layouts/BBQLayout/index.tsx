import { ReactNode } from 'react';
import { Container, Content, Footer, BackgroundImage, Title } from './styles';
import Image from 'next/image';

interface BBQLayoutProps {
  children: ReactNode;
}

const BBQLayout = ({ children }: BBQLayoutProps) => {
  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Title variant="h1">Agenda de Churras</Title>
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
