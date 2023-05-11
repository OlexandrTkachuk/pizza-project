import styled from '@emotion/styled';

import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

export const SortWrapper = styled.div`
  position: relative;
  user-select: none;
`;

export const SortLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SortLabelIconUp = styled(GoTriangleUp)`
  margin-right: 6px;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    transform: scale(1.5);
  }
`;

export const SortTextWrapper = styled.div``;

export const SortLabelIconDown = styled(GoTriangleDown)`
  margin-right: 6px;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    transform: scale(1.5);
  }
`;

export const SortLabelBoldText = styled.b`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 0.015em;
  color: #2c2c2c;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const SortLabelText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.015em;
  color: #fe5f1e;
  paddig-bottom: 1px;
  user-select: none;
  text-align: center;

  border-bottom: 1px dashed #fe5f1e;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const SortPopup = styled.div`
  position: absolute;
  z-index: 999;
  right: 0;
  margin-top: 8px;
  padding: 6px 0;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 10px 0;
    margin-top: 12px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
    padding: 10px 0;
    margin-top: 14px;
  }
`;

export const SortPopupList = styled.ul`
  overflow: hidden;
  text-align: end;
`;

export const SortPopupItem = styled.li`
  padding: 6px 12px;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 0.015em;
  color: #000000;
  min-width: 100px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 12px 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
    padding: 16px 24px;
  }

  &:hover {
    background: rgba(254, 95, 30, 0.05);
    color: #fe5f1e;
  }

  &.active {
    font-weight: 700;
    color: #fe5f1e;
  }
`;
