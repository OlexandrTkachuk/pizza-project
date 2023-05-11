import styled from '@emotion/styled';

import { SlBasket } from 'react-icons/sl';
import { BiTrash } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

export const Container = styled.main`
  width: 100%;
  margin: 36px auto;
  // max-width: 820px;
  // margin: 94px auto;
`;

export const TopBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media and screen (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const TopBlockTitle = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;

  @media and screen (min-width: 768px) {
    gap: 17px;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.01em;
  color: #000000;

  @media and screen (min-width: 768px) {
    font-size: 32px;
    line-height: 39px;
  }
`;

export const CartIcon = styled(SlBasket)`
  width: 18px;
  height: 18px;
  color: #3f3f3f;

  @media and screen (min-width: 768px) {
    width: 29px;
    height: 29px;
  }
`;

export const ButtonTrash = styled.button`
  gap: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 250ms ease;

  @media and screen (min-width: 768px) {
    gap: 8px;
  }

  &:hover {
    transform: scale(0.95);
  }
`;

export const TrashIcon = styled(BiTrash)`
  color: #b6b6b6;
  width: 18px;
  height: 18px;

  @media and screen(min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const TrashText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #b6b6b6;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media and screen (mid-width: 768px) {
    gap: 30px;
  }
`;

export const TotalInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;

  @media and screen (mid-width: 768px) {
    margin: 40px auto;
  }
`;

export const TotalInfoText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: #000000;

  @media and screen (mid-width: 768px) {
    font-size: 22px;
    line-height: 27px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const ButtonBack = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  transition: all 250ms ease;
  padding: 8px 12px;

  @media and screen(min-width: 768px) {
    padding: 16px;
  }

  &:hover {
    transform: scale(0.9);
  }
`;

export const ButtonBackText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #cacaca;
  margin-left: 4px;

  @media and screen (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const ButtonPay = styled(NavLink)`
  background: #fe5f1e;
  border-radius: 30px;
  text-decoration: none;
  cursor: pointer;
  transition: all 250ms ease;
  padding: 8px 12px;

  @media and screen(min-width: 768px) {
    padding: 16px;
  }

  &:hover {
    transform: scale(0.9);
  }
`;

export const ButtonPayText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;

  @media and screen (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;
