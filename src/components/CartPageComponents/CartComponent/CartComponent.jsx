// redux
import { useSelector } from 'react-redux';
import { selectCartItems } from 'redux/slices/selectors';

// components
import CartItem from '../CartItem/CartItem';

// styles
import {
  ButtonBack,
  ButtonBackText,
  ButtonPay,
  ButtonPayText,
  ButtonTrash,
  ButtonWrapper,
  CartIcon,
  CartList,
  Container,
  Title,
  TopBlockTitle,
  TopBlockWrapper,
  TotalInfoText,
  TotalInfoWrapper,
  TrashIcon,
  TrashText,
} from './CartComponent.styled';

//icons
import { IoIosArrowBack } from 'react-icons/io';

const CartComponent = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <Container>
      <TopBlockWrapper>
        <TopBlockTitle>
          <CartIcon />
          <Title>Кошик</Title>
        </TopBlockTitle>

        <ButtonTrash>
          <TrashIcon />
          <TrashText>очистити кошик</TrashText>
        </ButtonTrash>
      </TopBlockWrapper>

      <CartList>
        {cartItems.map(item => (
          <CartItem item={item} key={item.id} />
        ))}
      </CartList>

      <TotalInfoWrapper>
        <TotalInfoText className="totalCount">
          Всього піц:{' '}
          <span style={{ fontWeight: 700, color: 'black' }}>3 шт.</span>
        </TotalInfoText>

        <TotalInfoText className="totalPrice">
          Сума замовлення:{' '}
          <span style={{ fontWeight: 700, color: '#FE5F1E' }}>900 грн.</span>
        </TotalInfoText>
      </TotalInfoWrapper>

      <ButtonWrapper>
        <ButtonBack to="/">
          <IoIosArrowBack color="#D3D3D3" />
          <ButtonBackText>Повернутись назад</ButtonBackText>
        </ButtonBack>

        <ButtonPay>
          <ButtonPayText>Оплатити замовлення</ButtonPayText>
        </ButtonPay>
      </ButtonWrapper>
    </Container>
  );
};

export default CartComponent;
