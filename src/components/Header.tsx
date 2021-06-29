import { Link } from "react-router-dom";

function Header() {
  return (
    <header data-testid="Header" className="Header">
      <Link to="/">XYZ Corporation</Link>
    </header>
  );
}
export { Header };
export default Header;
