import { Switch, Route } from 'react-router-dom'

import SplashPage from './SplashPage'
import Nav from './Nav'

function Header() {
  return (
    <>
      <header data-testid='Header' className='Header'>
        <Switch>
          <Route path='/' exact>
            <SplashPage />
          </Route>
          <Route path='*'></Route>
        </Switch>
      </header>
      <Nav />
    </>
  )
}
export { Header }
export default Header
