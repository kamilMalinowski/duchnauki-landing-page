import "./Nav.scss"

function Nav({children}) {
  return (
  <nav className="nav">
    {children}
  </nav>
  );
}

export default Nav;