import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background: linear-gradient(135deg, #005580 0%, #003854 100%);
  padding: 0.25rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const NavContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(85px, 1fr) auto minmax(85px, 1fr);
  gap: 0.25rem;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0.15rem;

  @media (max-width: 768px) {
    grid-template-columns: minmax(75px, 1fr) auto minmax(75px, 1fr);
    gap: 0.15rem;
    padding: 0.1rem;
  }
`;

const LogoWrapper = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.25rem;

  @media (max-width: 768px) {
    gap: 0.15rem;
    padding: 0 0.15rem;
  }
`;

const Logo = styled.img`
  height: 100px;
  width: auto;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 70px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: ${props => props.align || 'center'};
  justify-content: center;
  
  &.left {
    grid-column: 1;
    align-items: flex-end;
  }

  &.right {
    grid-column: 3;
    align-items: flex-start;
  }

  &.middle {
    grid-column: 2;
    flex-direction: row;
    gap: 0.35rem;
    margin-bottom: 0.25rem;
    order: -1;

    @media (max-width: 768px) {
      gap: 0.25rem;
      margin-bottom: 0.15rem;
    }
  }

  &.bottom {
    grid-column: 1 / -1;
    flex-direction: row;
    justify-content: center;
    gap: 0.35rem;
  }

  @media (max-width: 768px) {
    gap: 0.15rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  white-space: nowrap;
  min-width: 100px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
    min-width: 90px;
    height: 28px;
  }
`;

const HiringButton = styled(NavLink)`
  background: linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%);
  color: white;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(255, 82, 82, 0.3);
  min-width: 110px;

  &:hover {
    background: linear-gradient(135deg, #ff5252 0%, #ff4242 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 82, 82, 0.4);
  }

  @media (max-width: 768px) {
    min-width: 100px;
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
    <NavContainer>
      <NavContent>
        <ButtonGroup className="left">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/before-and-after">Before & After</NavLink>
          <NavLink to="/our-team">Our Team</NavLink>
        </ButtonGroup>
        <LogoWrapper>
          <ButtonGroup className="middle">
            <HiringButton to="/#hiring-section" onClick={scrollToHiring}>🔨 We're Hiring!</HiringButton>
          </ButtonGroup>
          <Logo src="/images/Logo.png" alt="Affordable Drywall LLC Logo" />
        </LogoWrapper>
        <ButtonGroup className="right">
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/hand-texturing">Hand Texturing</NavLink>
          <NavLink to="/sound-proofing">Sound Proofing</NavLink>
          <NavLink to="/texture-matching">Texture Matching</NavLink>
        </ButtonGroup>
        <ButtonGroup className="bottom">
          <NavLink to="/exterior-painting">Exterior Painting</NavLink>
          <NavLink to="/fast-service">Fast & Friendly Service</NavLink>
        </ButtonGroup>
      </NavContent>
    </NavContainer>
  );
}

export default Navigation;