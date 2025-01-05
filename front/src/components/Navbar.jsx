import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Вебаут</h1>
      <ul className="navbar-links">
        <li><a href="#">Підбірки</a></li>
        <li><a href="#">Пошук</a></li>
        <li><a href="#">Бібліотека</a></li>
        <li><a href="#">Рейтинги</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
