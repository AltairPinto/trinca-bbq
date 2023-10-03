import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 17.625rem;
  height: 3.125rem;
  flex-shrink: 0;

  border-radius: 1.125rem;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);
  cursor: pointer;

  ${({ theme, color }) => css`
    background: ${color ?? theme.colors.black};
    color: ${color ?? theme.colors.white};
    font-size: ${theme.typography.h3.fontSize};
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.h3.fontWeight};
  `}
`;
