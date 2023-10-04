import { Typography } from 'components/Typography';
import styled from 'styled-components';

export const Container = styled.div`
  width: 17.625rem;
  height: 12rem;
  border-radius: 0.125rem;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.colors.white};

  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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
