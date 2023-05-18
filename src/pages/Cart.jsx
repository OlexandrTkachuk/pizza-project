// redux
import { useSelector } from 'react-redux';
import { selectCartItems } from 'redux/slices/selectors';

// import EmptyCart from 'components/CartPageComponents/EmptyCart/EmptyCart';
import CartComponent from 'components/CartPageComponents/CartComponent/CartComponent';
import EmptyCart from 'components/CartPageComponents/EmptyCart/EmptyCart';

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);

  return <>{cartItems.length > 0 ? <CartComponent /> : <EmptyCart />}</>;
};

export default CartPage;
