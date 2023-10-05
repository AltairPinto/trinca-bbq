import { Typography } from 'components/Typography';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Right = styled(Typography)<{ confirmed: boolean }>`
  position: absolute;
  right: 0;
  ${({ confirmed }) =>
    confirmed &&
    css`
      text-decoration: line-through;
    `}
`;
