import Product from './Product'
import Api from '../api'
import './ProductList.scss'

function ProductList() {
  return (
    <div data-testid='ProductList' className='ProductList'>
      {Api.getProducts()?.map((product: any) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export { ProductList }
export default ProductList
