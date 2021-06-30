import {CartItemType} from './CartItem.types'

function CartItem({id, name, price, thumbnail}: CartItemType) {
  return <div data-testid="CartItem" className="CartItem">
    <div>{name}</div>
    <div>{price}</div>
  </div>;
}
export { CartItem };
export default CartItem;
