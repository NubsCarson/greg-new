import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ServicesContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #005580 0%, #003854 100%);
  color: white;
  min-height: 100vh;
  animation: ${fadeIn} 1s ease-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('images/texture.png') repeat;
    opacity: 0.05;
    pointer-events: none;
  }
`;

const Logo = styled.img`
  max-width: 300px;
  margin: 0 auto;
  display: block;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
  border-radius: 15px;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    max-width: 200px;
    padding: 0.3rem;
  }

  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.3));
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  backdrop-filter: blur(5px);
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 25px;
    margin: 0.5rem;
  }
  
  a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    border-radius: 25px;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding: 0.4rem 0.8rem;
      flex: 1;
      text-align: center;
      min-width: 80px;
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
  }
`;

const Header = styled.header`
  text-align: center;
  padding: 3rem 2rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 1s ease-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    &::before {
      transform: translateX(100%);
    }
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #4db8ff;
  text-shadow: 0 0 10px rgba(77, 184, 255, 0.3);
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const ContactSection = styled.div`
  text-align: center;
  margin: 4rem auto;
  padding: 2rem;
  max-width: 800px;
  animation: ${fadeIn} 1s ease-out;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: white;
  background: rgba(77, 184, 255, 0.2);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(77, 184, 255, 0.3);

  &:hover {
    background: rgba(77, 184, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(77, 184, 255, 0.2);
  }
`;

function Services() {
  return (
    <ServicesContainer>
      <Logo src="images/Logo.png" alt="Affordable Drywall Logo" />
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/our-crew">Our Crew</Link>
        <Link to="/our-work">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </Navigation>

      <Header>
        <Title>Our Services</Title>
      </Header>

      <ServiceGrid>
        <ServiceCard>
          <ServiceIcon>🏗️</ServiceIcon>
          <ServiceTitle>New Construction</ServiceTitle>
          <ServiceDescription>
            Complete drywall solutions for new construction projects, ensuring quality installation from start to finish.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🔨</ServiceIcon>
          <ServiceTitle>Drywall Installation and Finishing</ServiceTitle>
          <ServiceDescription>
            Professional installation and finishing services with attention to detail and superior craftsmanship.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🔧</ServiceIcon>
          <ServiceTitle>Repairs</ServiceTitle>
          <ServiceDescription>
            Expert repair services for all types of drywall damage, restoring your walls to pristine condition.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>💧</ServiceIcon>
          <ServiceTitle>Water Damage</ServiceTitle>
          <ServiceDescription>
            Specialized repair and restoration services for water-damaged drywall, preventing mold and future issues.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🔄</ServiceIcon>
          <ServiceTitle>Popcorn Ceiling Removal</ServiceTitle>
          <ServiceDescription>
            Professional removal of popcorn ceilings, updating your space with a modern, clean look.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🎨</ServiceIcon>
          <ServiceTitle>Texture Matching</ServiceTitle>
          <ServiceDescription>
            Expert texture matching services to seamlessly blend repairs with existing walls and ceilings.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🛠️</ServiceIcon>
          <ServiceTitle>Stress Cracks & Corner Dents</ServiceTitle>
          <ServiceDescription>
            Precise repair of stress cracks and corner damage, restoring structural integrity and appearance.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🔊</ServiceIcon>
          <ServiceTitle>Soundproofing</ServiceTitle>
          <ServiceDescription>
            Professional soundproofing solutions for residential and commercial spaces, enhancing acoustic comfort.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🎯</ServiceIcon>
          <ServiceTitle>Professional Painting</ServiceTitle>
          <ServiceDescription>
            Complete painting services with premium materials and expert application for a perfect finish.
          </ServiceDescription>
        </ServiceCard>
      </ServiceGrid>

      <ContactSection>
        <ContactButton href="tel:702-497-0477">
          Get Your Free Estimate: 702-497-0477
        </ContactButton>
      </ContactSection>

      <Footer />
    </ServicesContainer>
  );
}

export default Services; 