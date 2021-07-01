import type { Product as ProductType } from './Product.types'
import Product from './Product'
import Api from '../api'
import './ProductList.scss'
interface ProductListIface {
  addItemToCart: (item: ProductType) => void
}
function ProductList({ addItemToCart }: ProductListIface) {
  return (
    <div data-testid='ProductList' className='ProductList'>
      {Api.getProducts()?.map((product: any) => (
        <Product
          key={product.id}
          product={product}
          addItemToCart={addItemToCart}
        />
      ))}
    </div>
  )
}

export { ProductList }
export default ProductList
