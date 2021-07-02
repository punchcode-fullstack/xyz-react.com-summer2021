import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CartItemType } from "./CartItem.types";

import "./CartItem.scss";

import useCart from "../hooks/useCart";

type CartItemProps = CartItemType & {
  itemIndex?: number;
};

function BtnDecrementQty({ id }: { id: string | number }) {
  const {decrementCartItemQty: decrement} = useCart()
  return (
    <button
      aria-label="decrement quantity"
      onClick={() => decrement && decrement(id)}
    >
      <FontAwesomeIcon icon={faMinus} />
    </button>
  );
}
function BtnIncrementQty({ id }: { id: string | number }) {
  const {incrementCartItemQty: increment} = useCart()
  return (
    <button
      aria-label="increment quantity"
      onClick={() => increment && increment(id)}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}
function BtnRemove({ id }: { id: string | number }) {
  const {removeFromCart: remove} = useCart()
  return (
    <button
      aria-label="remove from cart"
      onClick={() => remove && remove(id)}
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
}

function CartItem({
  id,
  itemIndex,
  name,
  price,
  qty,
  thumbnail,
}: CartItemProps) {
  return (
    <div data-testid="CartItem" className="CartItem">
      <div className="left">
        {itemIndex !== undefined && <div className="index">{itemIndex + 1}</div>}
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
          <BtnDecrementQty id={id} />
          <BtnIncrementQty id={id} />
          <BtnRemove id={id} />
        </div>
      </div>
    </div>
  );
}

export { CartItem };
export default CartItem;
