import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  max-height: calc(3 * 12rem + 2 * 1.5rem);

  max-height: 50vh;
  overflow-y: auto;
  padding: 0.125rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding-right: 0.5rem;
  }
`;
