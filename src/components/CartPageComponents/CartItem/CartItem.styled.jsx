import styled from '@emotion/styled';

import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const MinusIcon = styled(FiMinusCircle)`
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    transform: scale(0.9);
  }
`;

export const PlusIcon = styled(FiPlusCircle)`
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DeleteIcon = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    transform: scale(0.9);
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  min-width: 102px;
`;

export const CountText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: #000000;
  user-select: none;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 3.5;
`;

export const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 3.5;
`;

export const CartItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid lightblue;
  padding-top: 30px;
`;

export const CartItemDesc = styled.div`
  min-width: 280px;
`;

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 15px;
  user-select: none;
`;

export const CartItemTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom: 3px;
  user-select: none;
`;

export const CartItemText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #8d8d8d;
`;

export const CartPriceText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: #000000;
  user-select: none;
`;
