import '../stylesheets/navbar.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <section className="nav-container">
        <Link to="/" className="nav-logo">
          <Logo className="nav-logo__img" />
        </Link>

        <div className="nav__menu-items">
          <Link to="/">Visão Geral</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/delivery">Delivery</Link>
          <Link to="/user">Usuário</Link>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
