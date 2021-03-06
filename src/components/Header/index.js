import React from 'react';
import Link from 'gatsby-link';
import FCCSearch from 'react-freecodecamp-search';

import NavLogo from './components/NavLogo';

import './header.css';

function Header() {
  return (
    <header>
      <nav id='top-nav'>
        <Link className='home-link' to='/'>
          <NavLogo />
        </Link>
        <FCCSearch />
        <ul id='top-right-nav'>
          <li>
            <a href='https://learn.freecodecamp.org'>Learn</a>
          </li>
          <li>
            <a href='https://forum.freecodecamp.org'>Forum</a>
          </li>
          <li>
            <a href='#'>Log in</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
