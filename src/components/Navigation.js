import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(77, 184, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(77, 184, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(77, 184, 255, 0);
  }
`;

const Nav = styled.nav`
  background: linear-gradient(135deg, #005580 0%, #003854 100%);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.img`
  height: 120px;
  width: auto;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    height: 90px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #4db8ff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HiringButton = styled(Link)`
  background: linear-gradient(135deg, #4db8ff 0%, #0077cc 100%);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #66c2ff 0%, #0088ee 100%);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
`;

function Navigation() {
  const scrollToHiring = () => {
    const hiringSection = document.getElementById('hiring-section');
    if (hiringSection) {
      hiringSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <NavContainer>
        <Logo src="/images/Logo.png" alt="Affordable Drywall LLC Logo" />
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/our-work">Our Work</NavLink>
          <NavLink to="/our-crew">Our Crew</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <HiringButton to="/#hiring-section" onClick={scrollToHiring}>
            🔨 We're Hiring!
          </HiringButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;