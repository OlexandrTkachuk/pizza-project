import styled from '@emotion/styled';

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    gap: 12px;
  }
`;

export const CategoryButton = styled.button`
  background-color: #f9f9f9;
  padding: 8px 12px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 13px;
  transition: background-color 250ms ease;
  border: none;
  color: inherit;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }

  &:hover {
    background-color: lightgrey;
  }

  &:active {
    background-color: lightgrey;
  }

  &.active {
    background-color: #282828;
    color: #fff;
  }
`;
