import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

import "./App.scss";

function App() {
  return (
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
  );
}

export default App;
