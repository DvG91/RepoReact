import React from 'react';
import './style.css';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav>
      <div className="logo">Mi Tienda</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#SNosotros">Sobre Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;