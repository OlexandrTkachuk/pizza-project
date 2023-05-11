import styled from '@emotion/styled';

import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const MinusIcon = styled(FiMinusCircle)`
  cursor: pointer;
  transition: all 250ms ease;
  width: 22px;
  height: 22px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }

  &:hover {
    transform: scale(0.9);
  }
`;

export const PlusIcon = styled(FiPlusCircle)`
  cursor: pointer;
  transition: all 250ms ease;
  width: 22px;
  height: 22px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const DeleteIcon = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  transition: all 250ms ease;
  width: 22px;
  height: 22px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }

  &:hover {
    transform: scale(0.9);
  }
`;

export const CountWrapper = styled.div`
  gap: 8px;
  // min-width: 102px;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    min-width: 102px;
  }
`;

export const CountText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #000000;
  user-select: none;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 27px;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 2.5;

  @media screen and (min-width: 768px) {
    flex: 3.5;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 4;

  @media screen and (min
 -width: 768px) {
    flex: 3.5;
  }
`;

export const CartItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid lightblue;
  padding-top: 20px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
  }
`;

export const CartItemDesc = styled.div`
  min-width: 120px;

  @media screen and (min-width: 768px) {
    min-width: 280px;
  }
`;

export const CartItemImage = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 8px;
  user-select: none;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
    margin-right: 15px;
  }
`;

export const CartItemTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom: 3px;
  user-select: none;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 27px;
  }
`;

export const CartItemText = styled.p`
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: #8d8d8d;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const CartPriceText = styled.p`
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: #000000;
  user-select: none;
  font-size: 17px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
