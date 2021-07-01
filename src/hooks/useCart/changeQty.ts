import type { CartItemType } from "../../components/CartItem.types";

function changeQty(
  id: number | string,
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  operation: string
) {
  setCartItems((items) => {
    return items.map((i) => {
      // eslint-disable-next-line
      let qty = eval(`${i.qty}${operation}1`);
      qty = operation === "-" && qty < 1 ? 1 : qty;
      return i.id === id ? { ...i, qty } : i;
    });
  });
}
export default changeQty;
