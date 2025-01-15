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

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #003854 0%, #005580 100%);
  color: white;
  animation: ${fadeIn} 1s ease-out;
`;

const Header = styled.header`
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  border-radius: 15px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.2rem;
    color: #b3e0ff;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
      line-height: 1.4;
    }
  }
`;

const SlideshowContainer = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 2rem auto;
  position: relative;
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  overflow: hidden;
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
  border-radius: 10px;
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

function SoundProofing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    { src: "/images/SP/sp1.jpg?v=1", alt: "Sound Proofing Project - View 1" },
    { src: "/images/SP/sp2.jpg?v=1", alt: "Sound Proofing Project - View 2" },
    { src: "/images/SP/sp3.jpg?v=1", alt: "Sound Proofing Project - View 3" },
    { src: "/images/SP/sp4.jpg?v=1", alt: "Sound Proofing Project - View 4" }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying && images.length > 0) {
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
    <PageContainer>
      <Header>
        <h1>Sound Proofing</h1>
        <p>Create a quieter, more peaceful environment with our professional sound proofing solutions. We specialize in noise reduction and acoustic improvements.</p>
      </Header>

      {images.length > 0 && (
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
          <NavButton left onClick={prevSlide}>&lt;</NavButton>
          <NavButton onClick={nextSlide}>&gt;</NavButton>
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
      )}

      <Footer />
    </PageContainer>
  );
}

export default SoundProofing; 