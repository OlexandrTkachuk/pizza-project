import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  margin: 12px auto;
  width: calc(100vw - 32px);
  padding: 12px 18px;
  min-height: calc(100vh - 96px);

  background-color: #fff;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    margin: 24px auto;
    width: calc(100vw - 60px);
    padding: 12px 24px 36px;
  }

  @media screen and (min-width: 1024px) {
    width: calc(100vw - 200px);
    margin: 36px auto;
    max-width: 1400px;

    padding: 32px 36px 64px;
  }
`;
