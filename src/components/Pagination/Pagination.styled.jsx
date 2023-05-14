import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

export const PaginationWrapper = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background: #ebddba;
  margin: 0 auto;
  margin-top: 60px;
  width: 60%;
  padding: 16px 0;
  border-radius: 100px;
  font-size: 18px;
  font-weight: 600;

  .selected a {
    color: #fff;
    background: green;
  }

  li {
    display: flex;

    a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      line-height: 30px;
      cursor: pointer;
      padding: 6px 6px;
      border-radius: 50%;
      background: #fff;
      border: 1px solid green;
      color: green;
      transition: all 250ms ease;

      &:hover {
        background: green;
        color: #fff;
      }
    }
  }
`;
