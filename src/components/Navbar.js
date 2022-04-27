import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '2.5rem', height: '2.5rem' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '2.5rem', height: '2.5rem' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              exact
              activeClassName="active-link"
              onClick={() => closeMenu()}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
