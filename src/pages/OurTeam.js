import React, { useState, useEffect } from 'react';
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

const TeamContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #003854 0%, #005580 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-out;
`;

const Header = styled.header`
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;
  border-radius: 15px;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #e9ecef;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const SlideshowContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16/9;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 0 auto 2rem auto;
  backdrop-filter: blur(8px);
  padding: 1rem;

  @media (max-width: 768px) {
    aspect-ratio: 9/16;
    height: 70vh;
    max-height: 800px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
  transform: scale(${props => (props.active ? 1 : 1.1)});
  padding: 0.5rem;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  z-index: 2;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) scale(1.1);
  }

  ${props => props.left ? 'left: 20px;' : 'right: 20px;'}

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
    ${props => props.left ? 'left: 10px;' : 'right: 10px;'}
  }
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    bottom: 10px;
    padding: 6px 12px;
    gap: 8px;
  }
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${props => props.active ? 'white' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

function OurTeam() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: "/images/team/crew1.jpg?v=1", alt: "Team Member 1" },
    { src: "/images/team/crew2.jpg?v=1", alt: "Team Member 2" },
    { src: "/images/team/crew3.jpg?v=1", alt: "Team Member 3" },
    { src: "/images/team/crew4.png?v=1", alt: "Team Member 4" },
    { src: "/images/team/team1.jpg?v=1", alt: "Team Member 5" },
    { src: "/images/team/team2.jpg?v=1", alt: "Team Member 6" },
    { src: "/images/team/team3.jpg?v=1", alt: "Team Member 7" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <TeamContainer>
      <Header>
        <Title>Our Team</Title>
        <Subtitle>
          Meet the skilled professionals who make up our dedicated team. With years of experience
          and a commitment to excellence, our team delivers outstanding results on every project.
        </Subtitle>
      </Header>

      <SlideshowContainer>
        {images.map((image, index) => (
          <SlideImage
            key={image.src}
            src={image.src}
            alt={image.alt}
            active={index === currentSlide}
            loading="lazy"
          />
        ))}
        <NavButton left onClick={handlePrevSlide}>&lt;</NavButton>
        <NavButton onClick={handleNextSlide}>&gt;</NavButton>
        <DotContainer>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </DotContainer>
      </SlideshowContainer>

      <Footer />
    </TeamContainer>
  );
}

export default OurTeam; 