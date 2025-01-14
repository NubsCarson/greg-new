import React from 'react';
import styled, { keyframes } from 'styled-components';
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
  min-height: 100vh;
  padding: 1rem;
  background: linear-gradient(135deg, #003854 0%, #005580 100%);

  @media (min-width: 769px) {
    padding: 2rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    letter-spacing: -1px;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    color: #b3e0ff;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (min-width: 769px) {
    margin-bottom: 3rem;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 1s ease-out;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #4db8ff;
    font-weight: 600;
  }

  p {
    color: #e6e6e6;
    line-height: 1.6;
    margin-bottom: 0;
  }

  @media (min-width: 769px) {
    padding: 2rem;
    border-radius: 20px;

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #4db8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 184, 255, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto 1rem;

  @media (min-width: 769px) {
    font-size: 3rem;
    width: 80px;
    height: 80px;
  }
`;

function Services() {
  return (
    <ServicesContainer>
      <Header>
        <h1>Our Services</h1>
        <p>
          Complete drywall solutions for new construction projects, ensuring quality installation from start to finish.
        </p>
      </Header>

      <ServiceGrid>
        <ServiceCard>
          <ServiceIcon>🏗️</ServiceIcon>
          <h2>New Construction</h2>
          <p>
            Complete drywall solutions for new construction projects, ensuring quality installation from start to finish.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🔨</ServiceIcon>
          <h2>Drywall Installation and Finishing</h2>
          <p>
            Professional installation and finishing services with attention to detail and superior craftsmanship.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🔧</ServiceIcon>
          <h2>Repairs</h2>
          <p>
            Expert repair services for all types of drywall damage, restoring your walls to pristine condition.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>💧</ServiceIcon>
          <h2>Water Damage</h2>
          <p>
            Specialized repair and restoration services for water-damaged drywall, preventing mold and future issues.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🔄</ServiceIcon>
          <h2>Popcorn Ceiling Removal</h2>
          <p>
            Professional removal of popcorn ceilings, updating your space with a modern, clean look.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🎨</ServiceIcon>
          <h2>Texture Matching</h2>
          <p>
            Expert texture matching services to seamlessly blend repairs with existing walls and ceilings.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🛠️</ServiceIcon>
          <h2>Stress Cracks & Corner Dents</h2>
          <p>
            Precise repair of stress cracks and corner damage, restoring structural integrity and appearance.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🔊</ServiceIcon>
          <h2>Soundproofing</h2>
          <p>
            Professional soundproofing solutions for residential and commercial spaces, enhancing acoustic comfort.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🎯</ServiceIcon>
          <h2>Professional Painting</h2>
          <p>
            Complete painting services with premium materials and expert application for a perfect finish.
          </p>
        </ServiceCard>
      </ServiceGrid>

      <Footer />
    </ServicesContainer>
  );
}

export default Services; 