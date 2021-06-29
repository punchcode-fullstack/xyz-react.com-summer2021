import Header from './components/Header'
import ProductList from './components/ProductList'

import './App.scss';

import products from './data/products.json'

function App() {
  return (
    <div className="App">
      XYZ Corporation
      <ProductList products={products} />
    </div>
  );
}

export default App;
