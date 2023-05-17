import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Card = styled.div`
  position: relative;
  width: 280px;
  height: 560px;
  background-color: #ebddba;
  border-radius: 20px;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #bc7a2e;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  &:hover:before {
    clip-path: circle(300px at 80% -20%);
  }

  &:after {
    content: 'Pizza';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5em;
    font-weight: 800;
    font-style: italic;
    color: #c28b4d6d;
  }

  & .ImageBox {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    width: 100%;
    height: 150px;
    transition: 0.5s;
  }

  &:hover .ImageBox {
    top: 0%;
    right: 20px;
    transform: translateY(0%);
    width: 50%;
  }

  & .ContentBox {
    position: absolute;
    bottom: 100px;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 10;
  }

  &:hover .ContentBox {
    height: 210px;
  }

  & .StyledLink {
    opacity: 0;
    transform: translateY(50px);
  }

  &:hover .StyledLink {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.75s;
  }

  &:hover .SizeWrapper {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }

  &:hover .ColorWrapper {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
  }

  & .SizeWrapper {
    padding-bottom: 14px;
  }

  & .ColorWrapper {
    display: flex;
    flex-direction: row;
  }
`;

export const ImageBox = styled.div``;
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;
  display: flex;
  background-color: #bc7a2e;
  border-radius: 10px;
  flex-direction: column;
  padding: 10px;
  user-select: none;
  margin: 0 auto;
  opacity: 0;
  visibility: hidden;
`;

export const Image = styled.img`
  position: absolute;
  width: 270px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h2`
  position: relative;
  font-weight: 800;
  margin-top: 18px;
  font-size: 28px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #a52a2ad4;
  color: seagreen;
  margin-top: 20px;
`;

export const SubTitle = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`;

export const SizeSpan = styled.span`
  padding: 4px 12px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #111;
  background-color: #fff;
  transition: 500ms ease;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6c3c1579;
    color: #fff;
  }
`;

export const ColorSpan = styled.span`
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: 500ms ease;

  &:hover {
    background-color: #6c3c1579;
    color: #fff;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  color: #111;
  transition: 0.5s;

  padding: 6px 24px;
  background: #ffffff;
  border: 1px solid #bc7a2e;
  color: #bc7a2e;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    background: #bc7a2e;
    border: 1px solid #bc7a2e;
    color: #ffffff;
  }
`;

export const PriceText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.015em;
  color: #000000;
  margin-right: 4px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
