import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import type { CartItemType } from "./components/CartItem.types";
import type { Product as ProductType } from "./components/Product.types";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

import "./App.scss";

function App() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
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
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/">
            <Shop addItemToCart={addItemToCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
