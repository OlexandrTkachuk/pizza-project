import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 40px;
`;

export const Image = styled.img`
  width: 450px;
  transition: all 250ms ease;

  &:hover {
    transform: rotate(30deg);
  }
`;

export const PizzaInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 25%;
  gap: 40px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 44px;
  color: #212121;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #212121;
`;
