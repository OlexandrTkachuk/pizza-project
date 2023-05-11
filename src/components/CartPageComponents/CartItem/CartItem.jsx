// system
import { useState } from 'react';

// styles
import {
  CartItemDesc,
  CartItemImage,
  CartItemText,
  CartItemTitle,
  CartItemWrapper,
  CartPriceText,
  CartWrapper,
  CountText,
  CountWrapper,
  DeleteIcon,
  MinusIcon,
  PlusIcon,
  PriceWrapper,
} from './CartItem.styled';

const CartItem = ({ item }) => {
  const [count, setCount] = useState(1);
  const { imageUrl, title, price } = item;

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <CartItemWrapper>
      <CartWrapper>
        <CartItemImage src={imageUrl} alt="" />

        <CartItemDesc>
          <CartItemTitle>{title}</CartItemTitle>
          <CartItemText>тонкое тесто, 26 см.</CartItemText>
        </CartItemDesc>
      </CartWrapper>

      <PriceWrapper>
        <CountWrapper>
          <MinusIcon
            size={32}
            color={count > 1 ? '#FE5F1E' : '#D7D7D7'}
            onClick={handleDecrement}
          />
          <CountText>{count}</CountText>
          <PlusIcon size={32} color="#FE5F1E" onClick={handleIncrement} />
        </CountWrapper>

        <CartPriceText>{count * price}</CartPriceText>

        <DeleteIcon size={32} color="#D7D7D7" />
      </PriceWrapper>
    </CartItemWrapper>
  );
};

export default CartItem;
