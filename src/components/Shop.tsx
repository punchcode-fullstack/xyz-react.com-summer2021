import ProductList from './ProductList'

import {Product as ProductType} from './Product.types'

interface ShopType {
  addItemToCart: (item:ProductType)=>void;
}

function Shop({addItemToCart}: ShopType) {
  return <div data-testid="Shop" className="Shop">
      <ProductList addItemToCart={addItemToCart} />
  </div>;
}
export { Shop };
export default Shop;
