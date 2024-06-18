import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoTR from '../assets/LogoTR.png';
import '../Styles/Navbar.css';

interface NavLinkItem {
  path: string;
  display: string;
}

const Navbar: React.FC = () => {
  const navLinks: NavLinkItem[] = [
    { path: '/', display: 'Home' },
    { path: '/about', display: 'About' },
    { path: '/services', display: 'Services' },
    { path: '/styles', display: 'Styles' },
    { path: '/blogs', display: 'Blogs' },
    { path: '/bookVisit', display: 'Book an appointment' },
    { path: '/review', display: 'Review' }
  ];

  const headRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headRef.current?.classList.add('sticky_header');
      } else {
        headRef.current?.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => {
      window.removeEventListener('scroll', handleStickyHeader);
    };
  }, []);

  const toggleMenu = (): void => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('show_menu');
    }
  };

  return (
    <div>
      <section className='header' ref={headRef}>
        <img src={LogoTR} alt='' className='logo' />
        
        <ul className='navbar' ref={menuRef} onClick={toggleMenu}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path}>
                {link.display}
              </NavLink>
            </li>
          ))}
        </ul>
        
        <div className='login'>
          <Link to='/login'>
            <button className='btn-login'>Login</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
