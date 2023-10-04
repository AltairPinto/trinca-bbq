import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  max-height: calc(3 * 12rem + 2 * 1.5rem);
`;
