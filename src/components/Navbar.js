import React, { useState } from 'react';
import { Link } from 'gatsby';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/images/reactLogo.svg';

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="react logo" />
          </Link>
          <button onClick={() => setIsShow(!isShow)} className="nav-btn">
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={isShow ? 'nav-links show-links' : 'nav-links'}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setIsShow(false)}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setIsShow(false)}
          >
            recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setIsShow(false)}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setIsShow(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
