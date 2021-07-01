import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

import { CartProvider } from "./hooks/useCart";

import "./App.scss";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Shop />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App
