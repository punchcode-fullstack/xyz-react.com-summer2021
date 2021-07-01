import { CartItemType } from "./CartItem.types";
import CartItem from "./CartItem";
import useCart from "../hooks/useCart";

function Cart() {
  const { cartItems, calculateCart } = useCart();
  return (
    <div data-testid="Cart" className="Cart">
      <div aria-label="subtotal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(calculateCart())}
      </div>
      <div aria-label="item count">{cartItems?.length ?? 0}</div>
      <div className="cart-items">
        {cartItems?.map((item: CartItemType) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
export { Cart };
export default Cart;
