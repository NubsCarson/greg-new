import React from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from '../components/Footer';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const shine = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const ContentSection = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0.5rem;
    gap: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  animation: ${fadeIn} 1s ease-out;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  &:hover::after {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const TextContent = styled.div`
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #003854;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #005580, #4db8ff, #005580);
    background-size: 200% auto;
    animation: ${shine} 3s linear infinite;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Highlight = styled.span`
  color: #005580;
  font-weight: bold;
`;

const Feature = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #005580;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

function FastService() {
  return (
    <PageContainer>
      <ContentSection>
        <ImageContainer>
          <ServiceImage 
            src="/images/FFS/FFS1.jpg" 
            alt="Fast and Friendly Service Team" 
          />
        </ImageContainer>
        <TextContent>
          <Title>Fast and Friendly Service</Title>
          <Feature delay="0s">
            <h3>⚡ Quick Response Time</h3>
            <p>We understand that your time is valuable. Our team responds promptly to all inquiries and arrives on schedule, every time.</p>
          </Feature>
          <Feature delay="0.2s">
            <h3>😊 Customer-First Approach</h3>
            <p>Experience service with a smile! Our friendly team makes sure you're comfortable and informed throughout the entire process.</p>
          </Feature>
          <Feature delay="0.4s">
            <h3>🎯 Efficient Execution</h3>
            <p>Get back to your routine faster with our efficient work process. We deliver quality results without unnecessary delays.</p>
          </Feature>
          <Feature delay="0.6s">
            <h3>🤝 Professional Communication</h3>
            <p>Clear, honest, and friendly communication from start to finish. We keep you updated and address your concerns promptly.</p>
          </Feature>
        </TextContent>
      </ContentSection>
      <Footer />
    </PageContainer>
  );
}

export default FastService; 