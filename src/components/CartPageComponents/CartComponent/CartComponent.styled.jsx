import styled from '@emotion/styled';

import { SlBasket } from 'react-icons/sl';
import { BiTrash } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

export const Container = styled.main`
  width: 100%;
  max-width: 820px;
  margin: 94px auto;
`;

export const TopBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const TopBlockTitle = styled.div`
  display: flex;
  gap: 17px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const CartIcon = styled(SlBasket)`
  width: 29px;
  height: 29px;
  color: #3f3f3f;
`;

export const ButtonTrash = styled.button`
  gap: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    transform: scale(0.95);
  }
`;

export const TrashIcon = styled(BiTrash)`
  color: #b6b6b6;
  width: 20px;
  height: 20px;
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
  gap: 30px;
`;

export const TotalInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto;
`;

export const TotalInfoText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonBack = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 30px;
  cursor: pointer;
  padding: 16px;
  text-decoration: none;
  transition: all 250ms ease;

  &:hover {
    transform: scale(0.9);
  }
`;

export const ButtonBackText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #cacaca;
  margin-left: 4px;
`;

export const ButtonPay = styled(NavLink)`
  background: #fe5f1e;
  border-radius: 30px;
  text-decoration: none;
  cursor: pointer;
  padding: 16px;
  transition: all 250ms ease;

  &:hover {
    transform: scale(0.9);
  }
`;

export const ButtonPayText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
`;
