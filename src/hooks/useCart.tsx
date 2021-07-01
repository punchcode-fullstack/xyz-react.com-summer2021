import React, { useContext, useState } from "react";

import type { CartItemType } from "../components/CartItem.types";
import type { Product as ProductType } from "../components/Product.types";

const CartContext = React.createContext<any>({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: { children: any }) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  function calculateCart() {
    return cartItems.reduce(
      (subtotal: number, item: CartItemType) =>
        subtotal + (parseFloat(String(item.price)) * item.qty),
      0
    )
  }

  function addItemToCart(newItem: ProductType) {
    function getCurrentItem(prevCartItems: CartItemType[]) {
      return prevCartItems.find((i: CartItemType) => i.id === newItem.id);
    }
    function updateQtyOnExisting(prevCartItems: CartItemType[]) {
      return prevCartItems.map((prevCartItem: CartItemType) =>
        prevCartItem.id === newItem.id
          ? { ...newItem, qty: prevCartItem.qty + 1 }
          : prevCartItem
      );
    }
    function appendNewItem(prevCartItems: CartItemType[]) {
      return [...prevCartItems, { ...newItem, qty: 1 }];
    }
    setCartItems((prevCartItems) => {
      const currentItem: CartItemType | undefined =
        getCurrentItem(prevCartItems);
      return currentItem
        ? updateQtyOnExisting(prevCartItems)
        : appendNewItem(prevCartItems);
    });
  }
  function incrementCartItemQty(itemId: number | string) {
    setCartItems((prev) => {
      return prev.map((i) => {
        if (i.id === itemId) {
          return { ...i, qty: i.qty + 1 };
        }
        return i;
      });
    });
  }
  function decrementCartItemQty(itemId: number | string) {
    setCartItems((prev) => {
      return prev.map((i) => {
        if (i.id === itemId) {
          return { ...i, qty: i.qty - 1 > 0 ? i.qty - 1 : 1 };
        }
        return i;
      });
    });
  }
  function removeFromCart(itemId: number | string) {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  }
  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        calculateCart,
        cartItems,
        decrementCartItemQty,
        incrementCartItemQty,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default useCart;
