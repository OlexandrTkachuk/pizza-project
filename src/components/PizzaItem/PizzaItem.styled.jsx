import styled from '@emotion/styled';

import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

export const PizzaItemWrapper = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  justify-content: space-between;
  text-align: center;
  padding: 8px 6px;
  transition: all 250ms ease;
  background: #ebddba;
  border-radius: 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 280px;
    padding: 20px 16px;
    margin: 0;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const PizzaItemImageWrapper = styled.div`
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;
`;

export const PizzaItemImage = styled.img`
  transition: all 250ms ease;
  border-radius: 50%;
  user-select: none;
  width: 240px;
  height: 240px;

  @media screen and (min-width: 768px) {
    width: 248px;
    height: 248px;
  }

  &:hover {
    transform: scale(1.05);
    transform: rotate(30deg);
  }
`;

export const PizzaItemTitle = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
  z-index: 999;
  margin: 8px auto 12px;

  @media screen and (min-width: 768px) {
    min-height: 48px;
    margin-top: 18px;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const PizzaItemIngredients = styled.button`
  display: block;
  justify-contet: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  margin: 0 auto 16px;
  user-select: none;

  background: rgb(65, 147, 65);
  padding: 4px 20px;
  border: none;
  color: #fff;
  border-radius: 20px;
  font-weight: 600;
  font-size: 13px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin: 0 auto 20px;
  }
`;

export const IngredientsWrapper = styled.ul`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  height: 240px;
  background: rgb(65, 147, 65);
  border-radius: 12px;
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  font-weight: 600;
  font-size: 15px;
  list-style-type: disc;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 248px;
    height: 248px;
    top: 20px;
  }
`;

export const IngredientsText = styled.li`
  margin-left: 36px;
  color: #fff;
`;

export const PizzaSelectorWrapper = styled.div`
  display: flex;
  background-color: lightgrey;
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;
  user-select: none;
`;

export const SelectorList = styled.ul`
  display: flex;
  flex: 1;

  &:first-of-type {
    margin-bottom: 6px;
  }
`;

export const SelectorItem = styled.li`
  padding: 8px;
  flex: 1;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  &.active {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    cursor: auto;
  }
`;

export const PizzaItemBottomWrapper = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  margin-top: 24px;
  padding: 0 6px;
  flex: 2;
`;

export const PizzaItemPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PizzaItemPriceText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.015em;
  color: #000000;
  margin-right: 4px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 27px;
  }
`;

export const PizzaItemButtonWrapper = styled.button`
  display: flex;
  flex: 5;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 6px 12px;
  background: #ffffff;
  border: 1px solid #eb5a1e;
  border-radius: 30px;
  gap: 4px;
  color: #eb5a1e;
  cursor: pointer;
  max-width: 160px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  transition: all 200ms ease;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    min-width: 142px;
    padding: 6px 12px;
  }

  &:hover {
    background: #fe5f1e;
    border: 1px solid #fe5f1e;
    color: #ffffff;
  }
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const CounterButton = styled.button`
  border: none;
  background: transparent;
  height: 20px;
  cursor: pointer;
`;

export const CounterIconUp = styled(GoTriangleUp)`
  transition: all 250ms ease;
  color: #212121;
`;

export const CounterIconDown = styled(GoTriangleDown)`
  transition: all 250ms ease;

  &::disabled {
    color: red;
  }
`;
