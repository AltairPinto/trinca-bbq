import { Typography } from 'components/Typography';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url('/images/bbq_pattern.svg');
  background-repeat: repeat-x;
  background-position: center top;
`;

export const Content = styled.div`
  margin: auto;
  margin-top: 6.38rem;
`;

export const Title = styled(Typography)`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 4.38rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 1.75rem;
  left: 0;
  right: 0;
`;
