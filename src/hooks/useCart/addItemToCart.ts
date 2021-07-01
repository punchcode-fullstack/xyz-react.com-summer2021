import type { CartItemType } from "../../components/CartItem.types";
import type { Product as ProductType } from "../../components/Product.types";

function _add(items: CartItemType[], item: ProductType) {
  return [...items, { ...item, qty: 1 }];
}

function _find(items: CartItemType[], id: string | number) {
  return items.find((item: CartItemType) => item.id === id);
}

function _update(items: CartItemType[], item: ProductType) {
  return items.map((existing: CartItemType) =>
    existing.id === item.id ? { ...item, qty: existing.qty + 1 } : existing
  );
}

function addItemToCart(
  item: ProductType,
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
) {
  setCartItems((items) => {
    const currentItem: CartItemType | undefined = _find(items, item.id);
    return currentItem ? _update(items, item) : _add(items, item);
  });
}

export default addItemToCart;
