import type { Product as ProductType} from "./Product.types";
import type {CartItemType} from './CartItem.types'

interface ProductIface {
  product: ProductType;
  addItemToCart: (item: CartItemType) => void;
}

function Product({ product, addItemToCart }: ProductIface) {
  return (
    <div data-testid="Product" className="Product">
      <div>{product.id}</div>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <button onClick={() => addItemToCart(product)}>Add to Cart</button>
    </div>
  );
}

export { Product };
export default Product;
