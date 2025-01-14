import React from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from '../components/Footer';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const CrewContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #005580 0%, #003366 100%);
  animation: ${fadeIn} 0.5s ease-in;
  position: relative;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin: 1rem auto;
  display: block;
  transition: all 0.3s ease;
  border-radius: 15px;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  &:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background: rgba(0, 85, 128, 0.3);
  backdrop-filter: blur(10px);
  margin: 0 auto;
  max-width: 800px;
  border-radius: 50px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-family: 'itc-avant-garde-gothic-pro', sans-serif;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 1rem;
    border-radius: 25px;

    a {
      font-size: 1rem;
      padding: 0.4rem 0.8rem;
    }
  }
`;

const Header = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  position: relative;
  z-index: 1;
  background: rgba(0, 85, 128, 0.3);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'itc-avant-garde-gothic-pro', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TeamSection = styled.div`
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin: 0 1rem 2rem;
    padding: 1.5rem;
  }
`;

const TeamDescription = styled.p`
  color: white;
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const TeamPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PhotoCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  background: rgba(0, 85, 128, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 600px;
    object-fit: contain;
    transition: transform 0.3s ease;
    background: rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 20px;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    img {
      height: 450px;
      border-radius: 15px;
    }
  }
`;

function OurCrew() {
  return (
    <CrewContainer>
      <Header>
        <Title>Our Crew</Title>
      </Header>
      
      <TeamSection>
        <TeamDescription>
          At Affordable Drywall, our team is the heartbeat of our operations. United by a shared commitment to craftsmanship and customer satisfaction, our team of seasoned drywall professionals brings a wealth of experience to every project. Each member is a skilled craftsman, meticulously trained in the latest techniques and safety protocols to ensure the highest standards of quality. From precise installations to seamless finishes, our dedicated team works tirelessly to transform your spaces with skill, precision, and an eye for detail.
        </TeamDescription>

        <TeamPhotos>
          <PhotoCard>
            <img src="images/crew/IMG-20240228-WA0006.jpg" alt="Affordable Drywall Team Member" />
          </PhotoCard>
          <PhotoCard>
            <img src="images/crew/mifywk.jpg" alt="Affordable Drywall Team Member" />
          </PhotoCard>
        </TeamPhotos>
      </TeamSection>

      <Footer />
    </CrewContainer>
  );
}

export default OurCrew; 