import React, { useState } from 'react';
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

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const HomeContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #005580 0%, #003854 100%);
  color: white;
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
    background: url('/images/texture.png') repeat;
    opacity: 0.05;
    pointer-events: none;
  }
`;

// const Logo = styled.img`
//   max-width: 200px;
//   height: auto;
//   margin: 20px auto;
//   display: block;
//   border-radius: 50%;
//   transition: transform 0.3s ease;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 4rem auto;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  > *:first-child {
    animation: ${slideInLeft} 0.8s ease-out forwards;
  }

  > *:last-child {
    animation: ${slideInRight} 0.8s ease-out forwards;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
    opacity: 0.5;
    animation: rotate 20s linear infinite;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const sharedCardStyles = `
  text-align: center;
  padding: 2.5rem;
  border-radius: 15px;
  position: relative;
  z-index: 2;
  transition: all 0.4s ease;
  overflow: hidden;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #4db8ff, #0056b3);
    transform: scaleX(0);
    transition: transform 0.6s ease;
    transform-origin: left;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const CompanyInfo = styled.div`
  ${sharedCardStyles}

  h1 {
    margin: 0;
    color: #fff;
    font-size: 2.8rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    animation: ${scaleIn} 0.8s ease-out forwards;
  }

  .services {
    color: #4db8ff;
    margin: 1.2rem 0;
    font-size: 1.4rem;
    font-weight: 500;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    animation: ${slideInLeft} 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }

  .phone {
    display: inline-block;
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    margin: 1.2rem 0;
    font-weight: bold;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    z-index: 3;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    animation: ${scaleIn} 0.8s ease-out 0.4s forwards;
    opacity: 0;

    &:hover {
      color: #4db8ff;
      transform: scale(1.05);
    }
  }

  .location {
    color: #e6e6e6;
    font-size: 1.2rem;
    margin: 1.2rem 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    animation: ${slideInLeft} 0.8s ease-out 0.6s forwards;
    opacity: 0;
  }
`;

const LicenseInfo = styled.div`
  ${sharedCardStyles}
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem;
  position: relative;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    background-size: 1000px 100%;
    animation: ${shimmer} 8s linear infinite;
    pointer-events: none;
  }
`;

const LicenseItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(30px);
  animation: ${slideInRight} 0.6s ease-out forwards;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  &:nth-child(3) { animation-delay: 0.6s; }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
  }

  .icon {
    font-size: 1.8rem;
    color: #4db8ff;
  }

  .content {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .label {
    font-size: 0.9rem;
    color: #4db8ff;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.2rem;
  }

  .value {
    font-size: 1.3rem;
    color: #fff;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const AboutSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out 0.6s backwards;
`;

const AboutContent = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.1rem;
    opacity: 0.9;
  }

  .signature {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-style: italic;
  }
`;

const WorkImage = styled.img`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  display: block;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    margin: 1rem auto;
    border-radius: 15px;
  }
`;

const EstimateSection = styled.div`
  text-align: center;
  margin: 4rem auto;
  padding: 3rem 2rem;
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 1s ease-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(77, 184, 255, 0.1) 0%, transparent 60%);
    opacity: 0.5;
    animation: rotate 20s linear infinite;
  }
`;

const EstimateTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #4db8ff 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  animation: pulse 2s infinite;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const EstimatePhone = styled.a`
  display: inline-block;
  padding: 1.5rem 3rem;
  font-size: 2rem;
  color: white;
  background: rgba(77, 184, 255, 0.2);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid rgba(77, 184, 255, 0.3);
  margin-top: 1rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 3;

  &:hover {
    background: rgba(77, 184, 255, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(77, 184, 255, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
`;

const EstimateText = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  margin: 1.5rem 0;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  cursor: pointer;
`;

const ModalImage = styled.img`
  max-width: 95%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ReviewsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #ffffff;
    
    span {
      color: #ffd700;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    
    h2 {
      font-size: 2rem;
    }
  }
`;

const ReviewStats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: #ffffff;

  .rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .stars {
    color: #ffd700;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 1.2rem;
  }
`;

const ReviewButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: #ffd700;
  color: #004165;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    background: #ffe44d;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
  }
`;

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <HomeContainer>
      <MainContent>
        <CompanyInfo>
          <h1>Affordable Drywall LLC.</h1>
          <div className="services">Full Service Drywall & Paint Company</div>
          <a href="tel:702-497-0477" className="phone">702-497-0477</a>
          <div className="location">Vegas, Henderson, and surrounding areas.</div>
        </CompanyInfo>
        <LicenseInfo>
          <LicenseItem>
            <div className="icon">📋</div>
            <div className="content">
              <span className="label">NSCB License</span>
              <span className="value"># 0090041</span>
            </div>
          </LicenseItem>
          <LicenseItem>
            <div className="icon">💰</div>
            <div className="content">
              <span className="label">Bid Limit</span>
              <span className="value">$100,000</span>
            </div>
          </LicenseItem>
          <LicenseItem>
            <div className="icon">🛡️</div>
            <div className="content">
              <span className="label">Status</span>
              <span className="value">Licensed, Bonded & Insured</span>
            </div>
          </LicenseItem>
        </LicenseInfo>
      </MainContent>

      <ReviewsSection>
        <h2>Our Customers <span>Love</span> Our Work</h2>
        <ReviewStats>
          <div className="rating">
            <span className="stars">★★★★★</span>
            <span>5.0 Rating</span>
          </div>
          <div>|</div>
          <div>17 Google Reviews</div>
        </ReviewStats>
        <ReviewButton 
          href="https://g.co/kgs/6ab7ucE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Our Reviews on Google
        </ReviewButton>
      </ReviewsSection>

      <EstimateSection>
        <EstimateTitle>FREE ESTIMATES</EstimateTitle>
        <EstimateText>
          Get a professional assessment for your drywall project today!
          No obligation, no pressure - just expert advice and competitive pricing.
        </EstimateText>
        <EstimatePhone href="tel:702-497-0477">
          📞 Call (702) 497-0477
        </EstimatePhone>
      </EstimateSection>

      <AboutSection>
        <WorkImage 
          src="/images/IMG_0436.jpg" 
          alt="Drywall Work Example" 
          onClick={() => setSelectedImage("/images/IMG_0436.jpg")}
        />
        <AboutContent>
          <h2>Affordable Drywall: Building Relationships with Quality Work</h2>
          <p>
            At Affordable Drywall, we are a steadily growing drywall contracting company dedicated to forging solid partnerships with 
            local homeowners and general contractors alike. We recognize the pivotal role of reputation in the construction industry, 
            and we are committed to consistently exemplifying excellent communication, maintaining top-tier cleanliness at job sites, 
            and delivering impeccable workmanship.
          </p>
          <p>
            Our steadfast commitment to never take shortcuts is ingrained in our work ethic. Utilizing the finest materials and drawing 
            upon the expertise gleaned from a 20-year tenure in the field, we ensure that our construction techniques are refined and 
            reliable. Our unwavering dedication to quality serves as the cornerstone of our operations.
          </p>
          <p>
            We are eager for the opportunity to tender proposals for your forthcoming projects or home improvement needs. As a 
            company deeply rooted in integrity and excellence, we are confident in our ability to provide exceptional drywall services 
            that align with your exacting standards.
          </p>
          <p>
            For further inquiries or to discuss potential collaborations, please feel free to reach out to our team.
          </p>
          <div className="signature">
            <p>Warm regards,</p>
            <p>Dan VanBenthuysen, Owner</p>
            <p>Affordable Drywall</p>
          </div>
        </AboutContent>
      </AboutSection>

      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <ModalImage 
            src={selectedImage} 
            alt="Expanded view" 
            onClick={e => e.stopPropagation()} 
          />
          <CloseButton onClick={() => setSelectedImage(null)}>×</CloseButton>
        </Modal>
      )}
      
      <Footer />
    </HomeContainer>
  );
}

export default Home; 
