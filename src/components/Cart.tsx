import { useState } from 'react';

import { CartItemType } from './CartItem.types';
import CartItem from './CartItem';
import useCart from '../hooks/useCart';

import './Cart.scss';

function Cart() {
  const { cartItems, calculateCart, checkout } = useCart();
  const [name, setName] = useState('John Smith');
  const [email, setEmail] = useState('johnsmith@example.com');
  const [street1, setStreet1] = useState('123 Main St');
  const [street2, setStreet2] = useState('Suite 111');
  const [city, setCity] = useState('Chicago');
  const [state, setState] = useState('IL');
  const [zipcode, setZipcode] = useState('60645');

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

      <form>
        <div>
          Name:{' '}
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          Email:{' '}
          <input
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          Street1:{' '}
          <input
            type='text'
            onChange={(e) => setStreet1(e.target.value)}
            value={street1}
          />
        </div>
        <div>
          Street2:{' '}
          <input
            type='text'
            onChange={(e) => setStreet2(e.target.value)}
            value={street2}
          />
        </div>
        <div>
          City:{' '}
          <input
            type='text'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div>
          State:{' '}
          <input
            type='text'
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
        </div>
        <div>
          Zipcode:{' '}
          <input
            type='text'
            onChange={(e) => setZipcode(e.target.value)}
            value={zipcode}
          />
        </div>
      </form>

      <button
        aria-label='checkout'
        onClick={() =>
          checkout({
            name,
            email,
            street1,
            street2,
            city,
            state,
            zipcode,
          })
        }
        disabled={cartItems.length === 0}
      >
        Checkout
      </button>
    </div>
  );
}
export { Cart };
export default Cart;
