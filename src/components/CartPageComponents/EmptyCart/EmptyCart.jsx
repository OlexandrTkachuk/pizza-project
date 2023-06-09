// styles
import {
  Container,
  EmptyCartButton,
  EmptyCartImage,
  EmptyCartText,
  EmptyCartTitle,
  EmptyCartWrapper,
} from './EmptyCart.styled';

// images
import emptyImage from '../../../assets/emptyBasket.png';

const EmptyCart = () => {
  return (
    <Container>
      <EmptyCartWrapper>
        <EmptyCartTitle>Корзина пуста</EmptyCartTitle>

        <EmptyCartText>
          Ймовірно, що Ви досі не замовили піцу.
          <br />
          Для того, щоб замовити піцу, перейдіть на главну сторінку.
        </EmptyCartText>

        <EmptyCartImage src={emptyImage} alt="empty Cart" />

        <EmptyCartButton to="/">Повернутись назад</EmptyCartButton>
      </EmptyCartWrapper>
    </Container>
  );
};

export default EmptyCart;
