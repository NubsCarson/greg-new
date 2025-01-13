import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/services">Our Services</Link>
        </NavItem>
        <NavItem>
          <Link to="/our-crew">Our Crew</Link>
        </NavItem>
        <NavItem>
          <Link to="/our-work">Our Work</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation; 