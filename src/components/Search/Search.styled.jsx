import styled from '@emotion/styled';
import { FcSearch } from 'react-icons/fc';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const SearchWrapper = styled.div`
  position: relative;
  flex: 1.1;
  margin-right: 40px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  padding-left: 40px;
  border: 2px solid lightgrey;
  outline: none;
  border-radius: 16px;
  transition: all 250ms ease;

  &:focus {
    border: 2px solid grey;
  }
`;

export const SearchIcon = styled(FcSearch)`
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  cursor: pointer;
  transition: all 250ms ease;
  z-index: 999;

  color: ${props => (props.primary.length > 5 ? 'black' : 'grey')};

  &:hover {
    color: black;
  }
`;
