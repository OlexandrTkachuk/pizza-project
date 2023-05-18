// system
import { Link } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { clearHomePage } from 'redux/slices/filterSlice';

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
import { selectCartItems } from 'redux/slices/selectors';

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const totalCount = cartItems.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleLogoClick = () => {
    dispatch(clearHomePage());
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
          <CartText>{totalPrice} грн.</CartText>

          <ButtonDelimiter />

          <CartIcon />
          <CartText>{totalCount}</CartText>
        </CartWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
