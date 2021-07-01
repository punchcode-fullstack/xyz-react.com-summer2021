import type { CartItemType } from "../../components/CartItem.types";
import changeQty from "./changeQty";

function decrement(
  id: number | string,
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
) {
  changeQty(id, setCartItems, "-");
}
export default decrement;
