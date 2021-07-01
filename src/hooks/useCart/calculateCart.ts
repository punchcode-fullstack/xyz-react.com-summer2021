import type { CartItemType } from "../../components/CartItem.types";

function calculateCart(items: CartItemType[]) {
  return items.reduce((subtotal: number, { price, qty }: CartItemType) => {
    price = parseFloat(String(price));
    return subtotal + price * qty;
  }, 0);
}
export default calculateCart;
