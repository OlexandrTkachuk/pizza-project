import styled from '@emotion/styled';

import { BsCurrencyYen } from 'react-icons/bs';
import { SlBasket } from 'react-icons/sl';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #f6f6f6;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgrey;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
  gap: 30px;

  @media screen and (min-width: 768px) {
    justify-content: start;
    margin-bottom: 0;
    flex: 3;
  }
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const LogoInfo = styled.div`
  background: #ebddba;
  border-radius: 16px;
  text-align: center;
  padding: 12px 16px;
  max-width: 140px;

  @media screen and (min-width: 768px) {
    padding: 12px 28px;
    border-radius: 32px;
    max-width: 100%;
  }

  @media screen and (min-width: 1024px) {
    padding: 16px 44px;
    border-radius: 32px;
  }
`;

export const LogoName = styled.h1`
  font-size: 22px;
  letter-spacing: 1%;
  text-transform: uppercase;
  font-weight: 800;

  @media screen and (min-width: 768px) {
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 6px;
  }
`;

export const LogoText = styled.p`
  display: none;
  color: #212121;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const CartWrapper = styled(NavLink)`
  display: inline-flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  background: #fe5f1e;
  border-radius: 30px;
  padding: 8px 32px;
  transition: all 250ms ease;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    min-width: 150px;
    display: flex;
    padding: 12px 22px;
  }

  @media screen and (min-width: 1024px) {
    padding: 12px 22px;
  }

  &:hover {
    background: orangered;
    transform: scale(0.9);
  }
`;

export const CartText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  border: none;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const CurrencyIcon = styled(BsCurrencyYen)`
  margin-left: 4px;
  color: #ffffff;
`;

export const CartIcon = styled(SlBasket)`
  margin-right: 6px;
  color: #ffffff;
`;

export const ButtonDelimiter = styled.div`
  width: 2px;
  height: 25px;
  background: rgba(255, 255, 255, 0.25);
  margin: 0 13px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
