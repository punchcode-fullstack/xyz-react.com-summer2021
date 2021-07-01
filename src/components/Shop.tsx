import ProductList from './ProductList'
import SplashPage from './SplashPage'

function Shop() {
  return (
    <div data-testid='Shop' className='Shop'>
      {/* <SplashPage /> */}
      <ProductList />
    </div>
  )
}
export { Shop }
export default Shop
