import { CartItemType } from './CartItem.types';
import CartItem from './CartItem';

import './Cart.scss';
interface CartType {
  cartItems: CartItemType[];
  incrementCartItemQty?: (id: string | number) => void;
  decrementCartItemQty?: (id: string | number) => void;
  removeFromCart?: (id: string | number) => void;
}

function Cart({
  cartItems = [],
  incrementCartItemQty,
  decrementCartItemQty,
  removeFromCart,
}: CartType) {
  return (
    <div data-testid='Cart' className='Cart'>
      <div className='subtotal'>
        <h1 aria-label='subtotal'>
          Your Cart{' '}
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(
            cartItems?.reduce(
              (subtotal: number, item: CartItemType) =>
                subtotal + parseFloat(String(item.price)) * item.qty,
              0
            )
          )}
        </h1>{' '}
        <h1 aria-label='item count'>(Items: {cartItems?.length ?? 0})</h1>
      </div>
      <div className='cart-items'>
        {cartItems?.map((item, i) => (
          <>
            <CartItem
              itemIndex={i}
              key={item.id}
              {...item}
              incrementCartItemQty={incrementCartItemQty}
              decrementCartItemQty={decrementCartItemQty}
              removeFromCart={removeFromCart}
            />
            {/* <p>{i + 1}</p> */}
          </>
        ))}
      </div>
    </div>
  );
}
export { Cart };
export default Cart;
