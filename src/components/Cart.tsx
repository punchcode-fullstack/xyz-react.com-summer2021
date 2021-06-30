import {CartItemType} from './CartItem.types'
import CartItem from './CartItem'

interface CartType {
  cartItems: CartItemType[];
}

function Cart({cartItems=[]}: CartType) {
  return <div data-testid="Cart" className="Cart">
    <div aria-label="subtotal">0.00</div>
    <div aria-label="item count">0</div>
    <div className="cart-items">
      {cartItems?.map(
        (item) => <CartItem key={item.id} {...item} />
      )}
    </div>
  </div>;
}
export { Cart };
export default Cart;
