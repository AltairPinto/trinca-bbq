import styled, { css } from 'styled-components';
import type { TypographyProps } from '.';

const commonStyles = css`
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const variantMapping = {
  h1: styled.h1<TypographyProps>`
    ${commonStyles};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.h1.fontSize};
      font-weight: ${theme.typography.h1.fontWeight};
    `};
  `,
  h2: styled.h2<TypographyProps>`
    ${commonStyles};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.h2.fontSize};
      font-weight: ${theme.typography.h2.fontWeight};
    `};
  `,
  h3: styled.h3<TypographyProps>`
    ${commonStyles};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.h3.fontSize};
      font-weight: ${theme.typography.h3.fontWeight};
    `}
  `,
  h4: styled.h4<TypographyProps>`
    ${commonStyles};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.h4.fontSize};
      font-weight: ${theme.typography.h4.fontWeight};
    `};
  `,
  h5: styled.h4<TypographyProps>`
    ${commonStyles};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.h5.fontSize};
      font-weight: ${theme.typography.h5.fontWeight};
    `};
  `,
  span: styled.span<TypographyProps>`
    ${commonStyles};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.span.fontSize};
      font-weight: ${theme.typography.span.fontWeight};
    `};
  `,
  p: styled.p<TypographyProps>`
    ${commonStyles};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.p.fontSize};
      font-weight: ${theme.typography.p.fontWeight};
    `};
  `,
  label: styled.label<TypographyProps>`
    ${commonStyles};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.label.fontSize};
      font-weight: ${theme.typography.label.fontWeight};
    `};
  `,
};
