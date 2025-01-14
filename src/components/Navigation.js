import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  background: #004165;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  padding: 1rem;
  text-align: center;
  img {
    max-width: 250px;
    height: auto;
    border-radius: 15px;
    background: white;
    padding: 12px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 200px;
      padding: 10px;
    }
  }
`;

const Nav = styled.nav`
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 3rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${props => props.isActive ? 'white' : 'transparent'};
      transition: all 0.3s ease;
    }

    &:hover:after {
      background: white;
    }
  }
`;

function Navigation() {
  const location = useLocation();

  return (
    <NavContainer>
      <LogoContainer>
        <img src="/images/Logo.png" alt="Affordable Drywall" />
      </LogoContainer>
      <Nav>
        <NavList>
          <NavItem isActive={location.pathname === '/'}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem isActive={location.pathname === '/services'}>
            <Link to="/services">Our Services</Link>
          </NavItem>
          <NavItem isActive={location.pathname === '/our-crew'}>
            <Link to="/our-crew">Our Crew</Link>
          </NavItem>
          <NavItem isActive={location.pathname.includes('/our-work')}>
            <Link to="/our-work">Gallery</Link>
          </NavItem>
          <NavItem isActive={location.pathname === '/contact'}>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </NavList>
      </Nav>
    </NavContainer>
  );
}

export default Navigation;