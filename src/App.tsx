import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import type {CartItemType} from './components/CartItem.types'
import Header from "./components/Header";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

import "./App.scss";


function App() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  function addItemToCart(item:CartItemType){
    setCartItems(prev => [...prev, item])
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
