import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const CrewContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #005580 0%, #003366 100%);
  animation: ${fadeIn} 1s ease-in;
  padding: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    z-index: 0;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 0.5rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  max-width: 800px;
  margin: 1rem auto;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 8px;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
  }
`;

const Header = styled.div`
  text-align: center;
  margin: 2rem 0;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'itc-avant-garde-gothic-pro', sans-serif;
`;

const TeamSection = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`;

const TeamDescription = styled.p`
  color: white;
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 3rem;
`;

const TeamPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const PhotoCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const OurCrew = () => {
  return (
    <CrewContainer>
      <Link to="/">
        <Logo src="images/Logo.png" alt="Affordable Drywall Logo" />
      </Link>
      
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/our-crew">Our Crew</Link>
        <Link to="/our-work">Gallery</Link>
      </Navigation>

      <Header>
        <Title>Our Team</Title>
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
};

export default OurCrew; 