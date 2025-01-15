import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background: linear-gradient(135deg, #005580 0%, #003854 100%);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  height: 120px;
  width: auto;
  margin-bottom: 1rem;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 90px;
  }
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: ${props => (props.isOpen ? '100vh' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    gap: 0.35rem;
    padding: ${props => (props.isOpen ? '0.5rem 0' : '0')};
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.4rem;
    font-size: 0.95rem;
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: none;
    }
  }
`;

const HiringButton = styled(NavLink)`
  background: linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(255, 82, 82, 0.3);

  &:hover {
    background: linear-gradient(135deg, #ff5252 0%, #ff4242 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 82, 82, 0.4);
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0.35rem auto;
    padding: 0.4rem;
    font-size: 0.95rem;
  }
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const scrollToHiring = () => {
    const hiringSection = document.getElementById('hiring-section');
    if (hiringSection) {
      hiringSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <NavContainer>
      <TopBar>
        <Logo src="/images/Logo.png" alt="Affordable Drywall LLC Logo" />
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>
      </TopBar>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
        <NavLink to="/services" onClick={handleLinkClick}>Services</NavLink>
        <NavLink to="/before-and-after" onClick={handleLinkClick}>Before and After</NavLink>
        <NavLink to="/our-team" onClick={handleLinkClick}>Our Team</NavLink>
        <NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink>
        <NavLink to="/hand-texturing" onClick={handleLinkClick}>Hand Texturing</NavLink>
        <NavLink to="/fast-service" onClick={handleLinkClick}>Fast and Friendly Service</NavLink>
        <NavLink to="/texture-matching" onClick={handleLinkClick}>Texture Matching</NavLink>
        <NavLink to="/exterior-painting" onClick={handleLinkClick}>Exterior Painting</NavLink>
        <NavLink to="/sound-proofing" onClick={handleLinkClick}>Sound Proofing</NavLink>
        <HiringButton to="/#hiring-section" onClick={scrollToHiring}>🔨 We're Hiring!</HiringButton>
      </NavLinks>
    </NavContainer>
  );
}

export default Navigation;