import { Link } from "react-router-dom";

function Header() {
  return (
    <header data-testid="Header" className="Header">
      <Link to="/">XYZ Corporation</Link>
      <Link to="/cart">Cart</Link>
    </header>
  );
}
export { Header };
export default Header;
