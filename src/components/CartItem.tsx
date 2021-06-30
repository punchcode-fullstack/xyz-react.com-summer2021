import {CartItemType} from './CartItem.types'

function CartItem({id, name, price, qty, thumbnail}: CartItemType) {
  return <div data-testid="CartItem" className="CartItem">
    <div>{name}</div>
    <div>{price}</div>
    <div>qty: {qty}</div>
  </div>;
}
export { CartItem };
export default CartItem;
