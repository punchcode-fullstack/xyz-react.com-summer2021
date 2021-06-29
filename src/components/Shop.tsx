import ProductList from './ProductList'

import products from '../data/products.json'

function Shop() {
  return <div data-testid="Shop" className="Shop">
      <ProductList products={products} />
  </div>;
}
export { Shop };
export default Shop;
