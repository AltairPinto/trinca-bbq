import styled, { css } from 'styled-components';

export const Container = styled.div`
  gap: 1rem;

  label {
    display: flex;
    margin: 1rem 0;
  }

  p {
    position: absolute;
    margin: 0;
  }
`;

export const Input = styled.input<{ error: boolean }>`
  display: flex;

  width: 17.625rem;
  height: 3.125rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.125rem;
  border-color: transparent;
  padding: 0.5rem;

  ${({ theme }) => css`
    font-size: ${theme.typography.p.fontSize};
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.p.fontWeight};
  `}

  &::placeholder {
    font-size: 1.125rem;
    font-style: italic;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    padding: 0.5rem;
  }

  ${({ theme, error }) => css`
    border: 1px solid ${error ? theme.colors.error : 'transparent'};
    color: ${error ? theme.colors.error : theme.colors.black};
  `}
`;
