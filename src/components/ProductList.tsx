import type {CartItemType} from './CartItem.types'
import Product from "./Product";
import Api from '../api'

interface ProductListIface {
  addItemToCart: (item:CartItemType) => void;
}
function ProductList({ addItemToCart }:ProductListIface) {
  return (
    <div data-testid="ProductList" className="ProductList">
      {Api.getProducts()?.map((product: any) => (
        <Product
          key={product.id}
          product={product}
          addItemToCart={addItemToCart}
        />
      ))}
    </div>
  );
}

export { ProductList };
export default ProductList;
