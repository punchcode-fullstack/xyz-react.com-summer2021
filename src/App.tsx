import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import ProductList from "./components/ProductList";

import "./App.scss";

import products from "./data/products.json";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ProductList products={products} />
      </div>
    </Router>
  );
}

export default App;
