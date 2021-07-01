import React, { useContext, useState } from "react";

import type { CartItemType } from "../../components/CartItem.types";
import type { Product as ProductType } from "../../components/Product.types";

import addItemToCart from './addItemToCart';
import calculateCart from "./calculateCart";
import decrement from "./decrement";
import increment from "./increment";
import removeFromCart from "./removeFromCart";

const CartContext = React.createContext<any>({});

function useCart() {
  return useContext(CartContext);
}

function CartProvider({ children }: { children: any }) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  return (
    <CartContext.Provider
      value={{
        addItemToCart: (newItem: ProductType) => addItemToCart(newItem, setCartItems),
        calculateCart: () => calculateCart(cartItems),
        cartItems,
        decrementCartItemQty: (itemId: number | string) =>
          decrement(itemId, setCartItems),
        incrementCartItemQty: (itemId: number | string) =>
          increment(itemId, setCartItems),
        removeFromCart: (itemId: number | string) =>
          removeFromCart(itemId, setCartItems),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export { useCart, CartProvider };
export default useCart;
