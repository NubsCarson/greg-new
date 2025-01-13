import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

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

const HomeContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: #005580;
  color: white;
  animation: ${fadeIn} 1s ease-out;
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
  
  a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    border-radius: 25px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out 0.3s backwards;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CompanyInfo = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .phone {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-decoration: none;
    color: #4db8ff;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: #80ccff;
    }
  }

  .location {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

const LicenseInfo = styled.div`
  text-align: right;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    text-align: left;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
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

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const Certifications = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  
  img {
    height: 150px;
    border-radius: 10px;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));

    &:hover {
      transform: scale(1.05);
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Logo src="/images/Logo.png" alt="Affordable Drywall Logo" />
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/our-crew">Our Crew</Link>
        <Link to="/our-work">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </Navigation>

      <MainContent>
        <CompanyInfo>
          <h1>Affordable Drywall LLC.</h1>
          <div className="phone">702-497-0477</div>
          <div className="location">Vegas, Henderson, and surrounding areas.</div>
        </CompanyInfo>
        <LicenseInfo>
          <p>NSCB License # 0090041</p>
          <p>Bid Limit $100,000</p>
          <p>Licensed Bonded and Insured.</p>
        </LicenseInfo>
      </MainContent>

      <AboutSection>
        <WorkImage src="/images/IMG_0436.jpg" alt="Drywall Work Example" />
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
        <Certifications>
          <img src="/images/Home-Advisor-Logo-300x232.jpg" alt="Home Advisor Certification" />
        </Certifications>
      </AboutSection>
    </HomeContainer>
  );
}

export default Home; 