import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Switch, Route, Link } from 'react-router-dom'

import SplashPage from './SplashPage'
import Nav from './Nav'

// import './Header.scss'

function Header() {
  return (
    <header data-testid='Header' className='Header'>
      <Switch>
        <Route path='/' exact>
          <SplashPage />
          <Nav />
        </Route>
        <Route path='*'>
          <Nav />
        </Route>
      </Switch>
    </header>
  )
}
export { Header }
export default Header
