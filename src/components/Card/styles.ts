import styled from 'styled-components';

export const Container = styled.div`
  width: 17.625rem;
  height: 12rem;
  border-radius: 0.125rem;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.colors.white};
`;
