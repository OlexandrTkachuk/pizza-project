// system
import { useDispatch } from 'react-redux';
import {
  countDecrement,
  countIncrement,
  deleteCartItem,
} from 'redux/slices/cartItemsSlice';

// constants
import { typeOptions } from 'constants/typeOptions';

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
  const dispatch = useDispatch();
  const { imageUrl, title, price, id, type, size, count } = item;

  const handleFullPrice = () => {
    if (size === 30) {
      return `${Math.round(price * 1.35) * count}`;
    } else if (size === 40) {
      return `${Math.round(price * 1.65) * count}`;
    } else {
      return `${price * 1 * count}`;
    }
  };

  const handleDecrementCount = id => {
    if (count > 1) {
      dispatch(countDecrement(id));
    }
    if (count === 1) {
      dispatch(deleteCartItem(id));
    }
  };

  const handleIncrement = id => {
    if (count < 10) {
      dispatch(countIncrement(id));
    }
  };

  return (
    <CartItemWrapper>
      <CartWrapper>
        <CartItemImage src={imageUrl} alt="" />

        <CartItemDesc>
          <CartItemTitle>{title}</CartItemTitle>
          <CartItemText>
            {typeOptions[type]} тесто, {size} см.
          </CartItemText>
        </CartItemDesc>
      </CartWrapper>

      <PriceWrapper>
        <CountWrapper>
          <MinusIcon
            size={32}
            color={count > 1 ? '#FE5F1E' : '#D7D7D7'}
            onClick={() => handleDecrementCount(id)}
          />
          <CountText>{count}</CountText>
          <PlusIcon
            size={32}
            color="#FE5F1E"
            onClick={() => handleIncrement(id)}
          />
        </CountWrapper>

        <CartPriceText>{handleFullPrice()}</CartPriceText>

        <DeleteIcon
          size={32}
          color="#D7D7D7"
          onClick={() => dispatch(deleteCartItem(id))}
        />
      </PriceWrapper>
    </CartItemWrapper>
  );
};

export default CartItem;
