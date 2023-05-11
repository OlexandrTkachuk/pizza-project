// system
import { Link } from 'react-router-dom';

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
  return (
    <HeaderWrapper>
      <Container>
        <LogoWrapper>
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
