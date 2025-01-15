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

  @media (min-width: 769px) {
    padding: 3rem 2rem;

    h1 {
      font-size: 3rem;
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
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  animation: ${slideIn} 0.5s ease-out;
  background: rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
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

function ExteriorPainting() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    // Images will be added here
    // Example format:
    // { src: "/images/exterior-painting/image1.jpg", alt: "Exterior Painting Example 1" },
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
        <h1>Exterior Painting</h1>
        <p>Transform your home's exterior with our professional painting services.</p>
      </Header>

      {images.length > 0 && (
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
      )}

      <Footer />
    </PageContainer>
  );
}

export default ExteriorPainting; 