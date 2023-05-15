// system
import { Link } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux';
import { setPage } from 'redux/slices/filterSlice';

// components
import Search from 'components/Search/Search';

// styles
import {
  ButtonDelimiter,
  CartIcon,
  CartText,
  CartWrapper,
  Container,
  HeaderWrapper,
  LogoImg,
  LogoInfo,
  LogoName,
  LogoText,
  LogoWrapper,
  StyledLink,
} from './Header.styled';

// images
import logo from '../../assets/logo.png';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(setPage(1));
  };

  return (
    <HeaderWrapper>
      <Container>
        <LogoWrapper onClick={handleLogoClick}>
          <Link to="/">
            <LogoImg src={logo} alt="Pizza logo" />
          </Link>

          <StyledLink to="/">
            <LogoInfo>
              <LogoName>
                <p style={{ color: 'green' }}>Pizza </p>
                <p style={{ color: '#fff' }}>& </p>
                <p style={{ color: 'orangered' }}>Hungry</p>
              </LogoName>
              <LogoText>смачна доставка піци у Вінниці</LogoText>
            </LogoInfo>
          </StyledLink>
        </LogoWrapper>

        <Search />

        <CartWrapper to="/cart">
          <CartText>520 грн.</CartText>

          <ButtonDelimiter />

          <CartIcon />
          <CartText>3</CartText>
        </CartWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
