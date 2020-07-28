import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/vitorflix_logo.png';

function Footer() {
  return (
    <FooterBase>
      <a
        href='https://vitorgsevero.github.io/myPortfolio/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={Logo} alt='Logo Vítor' />
      </a>
      <p>
        Made with{' '}
        <span role='img' aria-label='heart'>
          ❤️
        </span>{' '}
        by{' '}
        <a
          href='https://github.com/vitorgsevero/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Vítor Severo
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
