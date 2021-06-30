import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.scss'
function Header() {
  return (
    <header data-testid='Header' className='Header'>
      <nav>
        <Link to='/' className='logo'>
          XYZ Corporation
        </Link>
        <Link to='/cart' className='cart'>
          Cart <FontAwesomeIcon icon={faShoppingCart} />
          <div>0</div>
        </Link>
      </nav>
    </header>
  )
}
export { Header }
export default Header
