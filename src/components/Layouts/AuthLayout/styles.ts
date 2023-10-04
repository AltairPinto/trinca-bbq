import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url('images/bbq_pattern.svg');
  background-repeat: repeat-x;
  background-position: center top;
`;

export const Content = styled.div`
  margin: auto;
`;
