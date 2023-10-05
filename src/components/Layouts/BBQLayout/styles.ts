import { Typography } from 'components/Typography';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;

  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.icedWhite};
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 12.6875rem;

  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url('/images/bbq_pattern.svg');
  background-repeat: repeat-x;
  background-position: center top;
  z-index: 1;
`;

export const Content = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 9.52rem;
  z-index: 2;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7.5rem;
`;

export const Title = styled(Typography)`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 4.38rem;
  left: 0;
  right: 0;
`;
