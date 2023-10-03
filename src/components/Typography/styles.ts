import styled, { css } from 'styled-components';
import type { TypographyProps } from '.';

export const variantMapping = {
  h1: styled.h1<TypographyProps>`
    ${({ truncate }) =>
      truncate &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `};
    ${({ strikethrough }) =>
      strikethrough &&
      css`
        text-decoration: line-through;
      `};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.h1.fontSize};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.h1.fontWeight};
    `};
  `,
  h2: styled.h2<TypographyProps>`
    ${({ truncate }) =>
      truncate &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `};
    ${({ strikethrough }) =>
      strikethrough &&
      css`
        text-decoration: line-through;
      `};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.h2.fontSize};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.h2.fontWeight};
    `};
  `,
  h3: styled.h3<TypographyProps>`
    ${({ truncate }) =>
      truncate &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `};
    ${({ strikethrough }) =>
      strikethrough &&
      css`
        text-decoration: line-through;
      `};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.h3.fontSize};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.h3.fontWeight};
    `}
  `,
  h4: styled.h4<TypographyProps>`
    ${({ truncate }) =>
      truncate &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `};
    ${({ strikethrough }) =>
      strikethrough &&
      css`
        text-decoration: line-through;
      `};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.h4.fontSize};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.h4.fontWeight};
    `};
  `,
  button: styled.span<TypographyProps>`
    ${({ truncate }) =>
      truncate &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `};
    ${({ strikethrough }) =>
      strikethrough &&
      css`
        text-decoration: line-through;
      `};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.button.fontSize};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.button.fontWeight};
    `};
  `,
  p1: styled.p<TypographyProps>`
    ${({ truncate }) =>
      truncate &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `};
    ${({ strikethrough }) =>
      strikethrough &&
      css`
        text-decoration: line-through;
      `};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.p1.fontSize};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.p1.fontWeight};
    `};
  `,
  p2: styled.p<TypographyProps>`
    ${({ truncate }) =>
      truncate &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `};
    ${({ strikethrough }) =>
      strikethrough &&
      css`
        text-decoration: line-through;
      `};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.p2.fontSize};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.p2.fontWeight};
    `};
  `,
  p3: styled.p<TypographyProps>`
    ${({ truncate }) =>
      truncate &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `};
    ${({ strikethrough }) =>
      strikethrough &&
      css`
        text-decoration: line-through;
      `};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.p3.fontSize};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.p3.fontWeight};
    `}
  `,
  overline: styled.p<TypographyProps>`
    ${({ truncate }) =>
      truncate &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `};
    ${({ strikethrough }) =>
      strikethrough &&
      css`
        text-decoration: line-through;
      `};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.overline.fontSize};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.overline.fontWeight};
    `}
  `,
  tag: styled.p<TypographyProps>`
    ${({ truncate }) =>
      truncate &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `};
    ${({ strikethrough }) =>
      strikethrough &&
      css`
        text-decoration: line-through;
      `};
    ${({ theme, color }) => css`
      color: ${theme.colors[color]};
      font-size: ${theme.typography.tag.fontSize};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.tag.fontWeight};
    `}
  `,
};
