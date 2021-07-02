import type { CartItemType } from "../../components/CartItem.types";
import type { Product as ProductType } from "../../components/Product.types";

function _add(cartItems: CartItemType[], product: ProductType) {
  return [...cartItems, { ...product, qty: 1 }];
}

function _find(cartItems: CartItemType[], id: string | number) {
  return cartItems.find((product: CartItemType) => product.id === id);
}

function _update(cartItems: CartItemType[], product: ProductType) {
  return cartItems.map((existing: CartItemType) =>
    existing.id === product.id
      ? { ...product, qty: existing.qty + 1 }
      : existing
  );
}

function addItemToCart(
  product: ProductType,
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
) {
  setCartItems((cartItems) => {
    const currentItem: CartItemType | undefined = _find(cartItems, product.id);
    return currentItem ? _update(cartItems, product) : _add(cartItems, product);
  });
}

export default addItemToCart;
