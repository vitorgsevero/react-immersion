import React from 'react';
import Logo from '../../assets/img/vitorflix_logo.png';
import './menu.css';

function Menu() {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={Logo} alt='VitorFlix logo'></img>
      </a>
    </nav>
  );
}

export default Menu;
