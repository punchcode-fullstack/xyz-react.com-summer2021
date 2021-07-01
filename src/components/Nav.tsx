import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './Nav.scss'

function Nav() {
  return (
    <div className='Nav'>
      <Link to='/' className='logo' aria-label='shop'>
        XYZ Corporation
      </Link>
      <Link to='/cart' className='cart'>
        Cart <FontAwesomeIcon icon={faShoppingCart} />
        <div>0</div>
      </Link>
    </div>
  )
}

export { Nav }
export default Nav
