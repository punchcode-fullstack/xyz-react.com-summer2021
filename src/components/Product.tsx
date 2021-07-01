import type { Product as ProductType } from './Product.types'
import './Product.scss'
interface ProductIface {
  product: ProductType
  addItemToCart: (item: ProductType) => void
}

function Product({ product, addItemToCart }: ProductIface) {
  return (
    <div data-testid='Product' className='Product'>
      {/* <div>{product.id}</div> */}
      <div
        style={{
          background: `url("${product.thumbnail}")`,
          height: '250px',
          width: '300px',
          backgroundPosition: '45% 50%',
          backgroundSize: '280%',
        }}
        className='bg'
      ></div>
      <div className='info'>
        <div>{product.name}</div>
        <div>
          <div className='price'>{product.price}</div>
          <button onClick={() => addItemToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export { Product }
export default Product
