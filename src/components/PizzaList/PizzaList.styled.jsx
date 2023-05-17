import styled from '@emotion/styled';

export const PizzaTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;

  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 44px;
  }
`;

export const PizzaGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 36px;
    max-width: 596px;
    margin: 0 auto;
    justify-content: start;
  }

  @media screen and (min-width: 1232px) {
    gap: 60px;
    max-width: 960px;
    justify-content: start;
  }
`;

export const NotFoundGif = styled.img`
  width: 300px;
  margin: 40px auto 0;
  border-radius: 8px;
  /* height: 300px; */
`;
