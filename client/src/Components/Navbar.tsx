import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo1 from '../assets/Logo1.png';
import './Navbar.css';

interface NavLinkItem {
  path: string;
  display: string;

}

interface nav {
  isActive: boolean;
}

const Navbar: React.FC = () => {
  
  const navLinks: NavLinkItem[] = [
    {
      path: '/',
      display: 'Home'
    },
    {
      path: '/about',
      display: 'About'
    },
    {
      path: '/services',
      display: 'Services'
    },
    {
      path: '/styles',
      display: 'Styles'
    },
    {
      path: '/blogs',
      display: 'Blogs'
    },
    {
      path: '/bookVisit',
      display: 'Book an appointemnt'
    },
    {
      path: '/review',
      display: 'Review'
    }
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
        <img src={Logo1} alt='' className='logo' />
        
        <div id='close-navbar' className='fas fa-time'></div>
        <ul className='navbar' ref={menuRef} onClick={toggleMenu}> 
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path} className={'navClass.isActive ?'}>
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
        <div id='menu-btn' className='fas fa-bars' onClick={toggleMenu}></div>
      </section>
    </div>
  );
};

export default Navbar;