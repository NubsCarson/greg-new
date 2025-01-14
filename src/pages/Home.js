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

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  background: #ffffff;
  color: #333;
  overflow-x: hidden;
`;

const HeroSection = styled.div`
  position: relative;
  height: 90vh;
  min-height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 85, 128, 0.75), rgba(0, 56, 84, 0.85)), 
              url('/images/IMG_0436.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    height: auto;
    min-height: 500px;
    padding: 4rem 1rem;
    background-attachment: scroll;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out;

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .services {
    font-size: 1.8rem;
    color: #4db8ff;
    margin-bottom: 2rem;
    font-weight: 500;
    animation: ${slideUp} 0.8s ease-out 0.2s forwards;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  .phone {
    display: inline-block;
    font-size: 2.2rem;
    color: white;
    text-decoration: none;
    margin: 1rem 0;
    font-weight: bold;
    transition: all 0.3s ease;
    animation: ${slideUp} 0.8s ease-out 0.4s forwards;

    &:hover {
      color: #4db8ff;
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  .location {
    font-size: 1.4rem;
    color: #e6e6e6;
    margin-top: 1rem;
    animation: ${slideUp} 0.8s ease-out 0.6s forwards;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  background: white;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  padding: 2.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 85, 128, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #005580, #4db8ff);
    transform: scaleX(0);
    transition: transform 0.6s ease;
    transform-origin: left;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const LicenseInfo = styled(InfoCard)`
  h3 {
    color: #005580;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .license-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 85, 128, 0.1);

    &:hover {
      background: #f1f3f5;
    }

    .icon {
      margin-right: 1rem;
      font-size: 1.5rem;
    }

    .label {
      font-weight: 500;
      color: #495057;
      margin-right: 0.5rem;
    }

    .value {
      margin-left: auto;
      color: #212529;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    .license-item {
      padding: 0.8rem;
      
      .label {
        font-size: 0.9rem;
      }
      
      .value {
        font-size: 0.9rem;
      }
    }
  }
`;

const EstimateSection = styled.div`
  background: linear-gradient(135deg, #005580 0%, #003854 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }

  .phone {
    display: inline-block;
    font-size: 2rem;
    color: white;
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    h2 {
      font-size: 2rem;
    }

    .phone {
      font-size: 1.6rem;
      padding: 0.8rem 1.6rem;
    }
  }
`;

const HiringSection = styled.div`
  padding: 4rem 2rem;
  background: white;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #005580;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 2rem;
    color: #666;
    line-height: 1.6;
  }

  .positions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 2rem auto;
  }

  .position-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 85, 128, 0.1);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: #005580;
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }

    p {
      font-size: 1rem;
      margin: 0;
    }
  }

  .apply-button {
    display: inline-block;
    margin-top: 2rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #005580 0%, #003854 100%);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 85, 128, 0.2);
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    h2 {
      font-size: 2rem;
    }

    .positions {
      grid-template-columns: 1fr;
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <h1>Affordable Drywall LLC</h1>
          <div className="services">Full Service Drywall & Paint Company</div>
          <a href="tel:702-497-0477" className="phone">(702) 497-0477</a>
          <div className="location">Vegas, Henderson, and surrounding areas</div>
        </HeroContent>
      </HeroSection>

      <MainContent>
        <LicenseInfo>
          <h3>License & Insurance</h3>
          <div className="license-item">
            <span className="icon">📋</span>
            <span className="label">NSCB License #</span>
            <span className="value">0090041</span>
          </div>
          <div className="license-item">
            <span className="icon">💰</span>
            <span className="label">Bid Limit</span>
            <span className="value">$100,000</span>
          </div>
          <div className="license-item">
            <span className="icon">🛡️</span>
            <span className="label">Status</span>
            <span className="value">Licensed, Bonded & Insured</span>
          </div>
        </LicenseInfo>
      </MainContent>

      <EstimateSection>
        <h2>Free Estimates</h2>
        <p>Contact us today for a free estimate on your drywall project. We're committed to providing quality service at competitive prices.</p>
        <a href="tel:702-497-0477" className="phone">(702) 497-0477</a>
      </EstimateSection>

      <HiringSection id="hiring-section">
        <h2>We're Hiring! 🏗️</h2>
        <p>Join our growing team of drywall professionals. We offer competitive pay and a great work environment.</p>
        <div className="positions">
          <div className="position-card">
            <h3>Drywall Hangers</h3>
            <p>Experienced in commercial and residential projects</p>
          </div>
          <div className="position-card">
            <h3>Drywall Finishers</h3>
            <p>Skilled in texture and finishing work</p>
          </div>
          <div className="position-card">
            <h3>General Laborers</h3>
            <p>Entry-level positions available</p>
          </div>
        </div>
        <a href="tel:702-497-0477" className="apply-button">Apply Now - Call (702) 497-0477</a>
      </HiringSection>

      <Footer />
    </HomeContainer>
  );
}

export default Home; 
