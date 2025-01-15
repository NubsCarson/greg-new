import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #003854 0%, #002540 100%);
  color: white;
  padding: 3rem 1rem 2rem;
  width: 100%;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-weight: bold;
  position: relative;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: #ff5252;
  }
`;

const FooterLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.3rem 0;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #ffffff;
    transform: translateX(5px);
  }
`;

const CompanyInfo = styled.div`
  font-size: 0.95rem;
  color: #e0e0e0;
  line-height: 1.6;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #e0e0e0;
  font-size: 0.9rem;
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  margin-bottom: 1rem;
  border-radius: 10px;
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo src="/images/Logo.png" alt="Affordable Drywall LLC Logo" />
          <CompanyInfo>
            Professional drywall services with a commitment to quality and customer satisfaction.
            Serving our community with excellence.
          </CompanyInfo>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Main Pages</SectionTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/before-and-after">Before & After</FooterLink>
          <FooterLink to="/our-team">Our Team</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Our Services</SectionTitle>
          <FooterLink to="/hand-texturing">Hand Texturing</FooterLink>
          <FooterLink to="/texture-matching">Texture Matching</FooterLink>
          <FooterLink to="/exterior-painting">Exterior Painting</FooterLink>
          <FooterLink to="/sound-proofing">Sound Proofing</FooterLink>
          <FooterLink to="/fast-service">Fast & Friendly Service</FooterLink>
        </FooterSection>

        <FooterSection>
          <SectionTitle>We're Hiring!</SectionTitle>
          <CompanyInfo>
            Join our team of skilled professionals! We offer competitive pay, 
            great benefits, and opportunities for growth.
          </CompanyInfo>
          <FooterLink to="/#hiring-section">🔨 Apply Now</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {currentYear} Affordable Drywall LLC. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer; 