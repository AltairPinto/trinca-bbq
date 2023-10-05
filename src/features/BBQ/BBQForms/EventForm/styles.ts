import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  text-align: left;
`;

export const ActionContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 5rem;
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
