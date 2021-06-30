import ProductList from './ProductList'

import {CartItemType} from './CartItem.types'

interface ShopType {
  addItemToCart: (item:CartItemType)=>void;
}

function Shop({addItemToCart}: ShopType) {
  return <div data-testid="Shop" className="Shop">
      <ProductList addItemToCart={addItemToCart} />
  </div>;
}
export { Shop };
export default Shop;
