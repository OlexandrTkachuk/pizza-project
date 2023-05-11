import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  user-select: none;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    height: calc(90vh - 200px);
  }
`;

export const ErrorImage = styled.img`
  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;

export const ErrorTitle = styled.h1`
  font-size: 22px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 28px;
  }
`;

export const StyledLink = styled(NavLink)`
  border: 1px solid transparent;
  outline: none;
  border-radius: 100px;
  background: orangered;
  color: #fff;
  cursor: pointer;
  transition: all 250ms ease;
  text-decoration: none;
  text-align: center;
  padding: 12px 24px;
  margin: 0 auto;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    max-width: 50%;
    font-size: 22px;
    padding: 12px 32px;
  }

  &:hover {
    background: transparent;
    color: orangered;
    border: 1px solid orangered;
  }
`;
