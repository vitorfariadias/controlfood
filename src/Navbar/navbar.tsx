import '../stylesheets/navbar.css';
import { ReactComponent as Logo } from '../images/logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <section className="nav-container">
        <a href="home" className="nav-logo">
          <Logo className='nav-logo__img'/>
        </a>
        <a href="geral">Visão Geral</a>
        <a href="produtos">Produtos</a>
        <a href="delivery" className="active">
          Delivery
        </a>
        <a href="usuario">Usuário</a>
      </section>
    </nav>
  );
}

export default Navbar;
