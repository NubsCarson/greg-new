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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const CrewContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: #005580;
  color: white;
  min-height: 100vh;
  animation: ${fadeIn} 1s ease-out;
`;

const Header = styled.header`
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
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
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const SlideshowContainer = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 2rem auto;
  position: relative;
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  animation: ${slideIn} 0.5s ease-out;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: translateY(-50%) scale(1.1);
  }
`;

const PrevButton = styled(SlideButton)`
  left: 10px;
`;

const NextButton = styled(SlideButton)`
  right: 10px;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#4db8ff' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

function OurCrew() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    { src: "/images/crew/crew1.jpg", alt: "Crew Member 1" },
    { src: "/images/crew/crew2.jpg", alt: "Crew Member 2" },
    { src: "/images/crew/crew3.jpg", alt: "Crew Member 3" },
    { src: "/images/crew/crew4.png", alt: "Crew Member 4" }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <CrewContainer>
      <Header>
        <Title>Our Crew</Title>
        <Subtitle>
          Meet the skilled professionals who make up our dedicated team. With years of experience
          and a commitment to excellence, our crew delivers outstanding results on every project.
        </Subtitle>
      </Header>

      <SlideshowContainer>
        <SlideImage 
          src={images[currentSlide].src} 
          alt={images[currentSlide].alt} 
          key={currentSlide}
        />
        <PrevButton onClick={prevSlide}>←</PrevButton>
        <NextButton onClick={nextSlide}>→</NextButton>
        <DotContainer>
          {images.map((_, index) => (
            <Dot 
              key={index} 
              active={currentSlide === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotContainer>
      </SlideshowContainer>

      <Footer />
    </CrewContainer>
  );
}

export default OurCrew; 