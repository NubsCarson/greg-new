import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  text-align: center;
  margin-top: 4rem;
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 2rem;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Certification = styled.div`
  margin-bottom: 1.5rem;
  
  img {
    height: 180px;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    
    img {
      height: 140px;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Certification>
        <a href="https://www.homeadvisor.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/Home-Advisor-Icon.png" alt="Home Advisor Certified" />
        </a>
      </Certification>
      <Copyright>
        © 2025 Affordable Drywall LLC. All Rights Reserved. NSCB License # 0090041
      </Copyright>
    </FooterContainer>
  );
}

export default Footer; 