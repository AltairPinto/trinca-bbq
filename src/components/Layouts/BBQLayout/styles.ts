import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.icedWhite};
`;

export const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 334px;

  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url('images/bbq_pattern.svg');
  background-repeat: repeat-x;
  background-position: center top;
  z-index: 1;
`;

export const Content = styled.div`
  margin: auto;
  text-align: center;
  z-index: 2;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7.5rem;
`;
