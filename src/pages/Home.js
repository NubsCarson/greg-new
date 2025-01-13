import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

const Hero = styled.section`
  background-image: url('/images/IMG_0436.jpg');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 2rem;
`;

const Logo = styled.img`
  max-width: 300px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-family: 'itc-avant-garde-gothic-pro', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: white;
`;

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background: white;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CTAButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Certifications = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

function Home() {
  return (
    <HomeContainer>
      <Hero>
        <HeroContent>
          <Logo src="/images/Logo.png" alt="Affordable Drywall Logo" />
          <Title>Affordable Drywall</Title>
          <Subtitle>Your Local Patching & Finishing Pros in Henderson & Las Vegas</Subtitle>
          <CTAButton>Get a Free Quote</CTAButton>
        </HeroContent>
      </Hero>

      <ServicesSection>
        <Title style={{ color: '#333' }}>Our Services</Title>
        <ServicesGrid>
          <ServiceCard>
            <h3>Residential Drywall</h3>
            <p>Expert drywall services for your home, from repairs to complete installations.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Commercial Drywall</h3>
            <p>Professional drywall solutions for businesses and commercial properties.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Drywall Repair</h3>
            <p>Quick and efficient repairs for cracks, holes, and water damage.</p>
          </ServiceCard>
        </ServicesGrid>
        <Certifications>
          <img src="/images/Home-Advisor-Logo-300x232.jpg" alt="Home Advisor Certification" style={{ height: '100px' }} />
        </Certifications>
      </ServicesSection>
    </HomeContainer>
  );
}

export default Home; 