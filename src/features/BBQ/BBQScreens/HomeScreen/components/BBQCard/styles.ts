import { Typography } from 'components/Typography';
import styled from 'styled-components';

export const Header = styled.div`
  text-align: left;
`;

export const Date = styled(Typography)`
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

export const Title = styled(Typography)`
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
`;

export const Counter = styled(Typography)`
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;
