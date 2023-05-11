import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

export const EmptyCartWrapper = styled.div`
  text-align: center;
  max-width: 540px;
  width: 100%;
  margin: 0 auto;
`;

export const EmptyCartTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.01em;
  color: #000000;
  text-align: center;
  margin-bottom: 10px;
`;

export const EmptyCartText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 145.4%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #777777;
  margin-bottom: 48px;
`;

export const EmptyCartImage = styled.img`
  margin: 0 auto 74px;
`;

export const EmptyCartButton = styled(NavLink)`
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.015em;
  color: #ffffff;
  background: #282828;
  border-radius: 30px;
  padding: 15px;
  text-decoration: none;
`;
