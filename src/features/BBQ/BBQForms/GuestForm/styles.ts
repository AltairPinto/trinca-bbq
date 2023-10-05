import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`;

export const ActionContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  button {
    width: 10rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    button {
      width: auto;
    }
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;
