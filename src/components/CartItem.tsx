import { CartItemType } from "./CartItem.types";

type CartItemProps = CartItemType & {
  incrementCartItemQty?: (id: string | number) => void;
  decrementCartItemQty?: (id: string | number) => void;
};
function CartItem({
  id,
  name,
  price,
  qty,
  thumbnail,
  decrementCartItemQty,
  incrementCartItemQty,
}: CartItemProps) {
  return (
    <div data-testid="CartItem" className="CartItem">
      <div>{name}</div>
      <div>{price}</div>
      <div aria-label="quantity">qty: {qty}</div>
      <button
        aria-label="decrement quantity"
        onClick={() => {
          if (decrementCartItemQty) {
            decrementCartItemQty(id);
          }
        }}
      >
        -
      </button>
      <button
        aria-label="increment quantity"
        onClick={() => {
          if (incrementCartItemQty) {
            incrementCartItemQty(id);
          }else{
            console.log('missing func')
          }
        }}
      >
        +
      </button>
    </div>
  );
}

export { CartItem };
export default CartItem;
