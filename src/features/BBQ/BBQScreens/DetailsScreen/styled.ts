import { Typography } from 'components/Typography';
import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 0.125rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);
  width: 36.75rem;
  height: 100%;
  max-height: calc(100vh - 16rem);
  padding: 1.5rem;
  overflow-y: auto;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  margin-top: 1rem;
`;

export const HeaderText = styled.div`
  text-align: left;
`;

export const HeaderAmounts = styled.div`
  position: absolute;
  right: 0;
`;

export const Content = styled.div`
  position: relative;
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

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Right = styled.div`
  position: relative;
  margin-left: auto;
  right: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const BackContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  cursor: pointer;
`;
