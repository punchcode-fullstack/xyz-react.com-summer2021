import type { CartItemType } from "../../components/CartItem.types";

function removeFromCart(
  id: number | string,
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
) {
  setCartItems((items) => items.filter((i) => i.id !== id));
}

export default removeFromCart;
