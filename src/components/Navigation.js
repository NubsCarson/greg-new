import React, { useState } from 'react';
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
    margin-bottom: 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 0.8rem;
    max-height: ${props => (props.isOpen ? '500px' : '0')};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: ${props => (props.isOpen ? '1rem' : '0')};
    opacity: ${props => (props.isOpen ? '1' : '0')};
    transform: translateY(${props => (props.isOpen ? '0' : '-10px')});
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
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: center;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(77, 184, 255, 0.2);
    }
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
    width: 100%;
    text-align: center;
    padding: 1rem;
    font-size: 1rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  z-index: 1001;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: #4db8ff;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToHiring = () => {
    const hiringSection = document.getElementById('hiring-section');
    if (hiringSection) {
      hiringSection.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <Nav>
      <NavContainer>
        <TopBar>
          <Logo src="/images/Logo.png" alt="Affordable Drywall LLC Logo" />
          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </MenuButton>
        </TopBar>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
          <NavLink to="/our-work" onClick={() => setIsMenuOpen(false)}>Our Work</NavLink>
          <NavLink to="/our-crew" onClick={() => setIsMenuOpen(false)}>Our Crew</NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <HiringButton to="/#hiring-section" onClick={scrollToHiring}>
            🔨 We're Hiring!
          </HiringButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;