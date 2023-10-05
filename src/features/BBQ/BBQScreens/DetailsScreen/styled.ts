import { Typography } from 'components/Typography';
import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 0.125rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);
  width: 36.75rem;
  max-height: 53.375rem;
  padding: 1.5rem;
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  position: relative;
`;

export const HeaderText = styled.div`
  text-align: left;
`;

export const HeaderAmounts = styled.div`
  position: absolute;
  right: 0;
`;

export const Content = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled(Typography)`
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 0.5rem;
`;

export const Counter = styled(Typography)`
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

export const Date = styled(Typography)`
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

export const Body = styled.div`
  position: relative;
`;
