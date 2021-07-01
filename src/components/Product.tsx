import type { Product as ProductType } from './Product.types'
import './Product.scss'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import useCart from '../hooks/useCart'
interface ProductIface {
  product: ProductType
}

function Product({ product }: ProductIface) {
  const {addItemToCart} = useCart()
  return (
    <div data-testid='Product' className='Product'>
      <div
        style={{
          background: `url("${product.thumbnail}")`,
          height: '250px',

          backgroundPosition: '45% 50%',
          backgroundSize: '280%',
        }}
        className='bg'
      ></div>
      <div className='info'>
        <div>{product.name}</div>
        <div>
          <div className='price'>{product.price}</div>
          <button onClick={() => addItemToCart(product)}>
            Add to Cart <Icon icon={faCartPlus} />
          </button>
        </div>
      </div>
    </div>
  )
}

export { Product }
export default Product
