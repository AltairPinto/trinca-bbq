import { Typography } from 'components/Typography';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Right = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Amount = styled(Typography)<{ confirmed: boolean }>`
  ${({ confirmed }) =>
    confirmed &&
    css`
      text-decoration: line-through;
    `}
`;
