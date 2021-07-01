import { CartItemType } from "./CartItem.types";

import "./CartItem.scss";

import useCart from "../hooks/useCart";

type CartItemProps = CartItemType & {
  itemIndex: number;
};

function CartItem({
  id,
  itemIndex,
  name,
  price,
  qty,
  thumbnail,
}: CartItemProps) {
  const { decrementCartItemQty, incrementCartItemQty, removeFromCart } =
    useCart();
  return (
    <div data-testid="CartItem" className="CartItem">
      <div className="left">
        <div className="index">{itemIndex + 1}</div>
        <div
          className="thumb"
          style={{
            background: `url("${thumbnail}")`,
            backgroundPosition: "45% 50%",
            backgroundSize: "250%",
          }}
        ></div>
      </div>
      <div className="name">{name}</div>
      <div className="right">
        <div className="price">{price}</div>
        <div className="qty" aria-label="quantity">
          qty: {qty}
        </div>
        <div>
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
              }
            }}
          >
            +
          </button>
          <button
            aria-label="remove from cart"
            onClick={() => {
              if (removeFromCart) {
                removeFromCart(id);
              }
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export { CartItem };
export default CartItem;
