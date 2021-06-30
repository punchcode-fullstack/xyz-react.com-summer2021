import { CartItemType } from "./CartItem.types";
import CartItem from "./CartItem";

interface CartType {
  cartItems: CartItemType[];
}

function Cart({ cartItems = [] }: CartType) {
  return (
    <div data-testid="Cart" className="Cart">
      <div aria-label="subtotal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(
          cartItems?.reduce(
            (subtotal: number, item: CartItemType) =>
              subtotal + (parseFloat(String(item.price)) * item.qty),
            0
          )
        )}
      </div>
      <div aria-label="item count">{cartItems?.length ?? 0}</div>
      <div className="cart-items">
        {cartItems?.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
export { Cart };
export default Cart;
