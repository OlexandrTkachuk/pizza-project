import styled from '@emotion/styled';

export const HomeBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;

  @media screen and (min-width: 768px) {
    align-items: center;
    margin: 30px auto;
  }

  @media screen and (min-width: 1024px) {
    margin: 44px auto;
  }
`;
