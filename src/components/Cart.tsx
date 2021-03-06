import { CartItemType } from './CartItem.types';
import CartItem from './CartItem';
import useCart from '../hooks/useCart';
import CheckoutForm from './CheckoutForm';
import './Cart.scss';

function Cart() {
  const { cartItems, calculateCart } = useCart();

  return (
    <div data-testid='Cart' className='Cart'>
      <header>
        <h1 className='subtotal' aria-label='subtotal'>
          Your Cart{' '}
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(calculateCart())}
        </h1>
        <h1 aria-label='item count'>(Items: {cartItems?.length ?? 0})</h1>
      </header>
      <div className='cart-items'>
        {cartItems?.map((item: CartItemType, i: number) => (
          <CartItem key={item.id} {...item} itemIndex={i} />
        ))}
      </div>
      <CheckoutForm />
    </div>
  );
}
export { Cart };
export default Cart;
