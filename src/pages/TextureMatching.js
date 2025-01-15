import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from '../components/Footer';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #005580 0%, #003854 100%);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;

  h1 {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  p {
    color: #e9ecef;
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const SlideshowContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16/9;
  position: relative;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 0 auto;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  padding: 0.5rem;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 85, 128, 0.8);
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
  transition: background-color 0.3s ease;
  z-index: 2;

  &:hover {
    background: rgba(0, 85, 128, 1);
  }

  ${props => props.left ? 'left: 10px;' : 'right: 10px;'}

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#005580' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#005580' : 'rgba(255, 255, 255, 0.8)'};
  }
`;

function TextureMatching() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: '/images/TM/tm1.jpg', alt: 'Texture Matching Example 1' },
    { src: '/images/TM/tm2.jpg', alt: 'Texture Matching Example 2' },
    { src: '/images/TM/tm3.jpg', alt: 'Texture Matching Example 3' }
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
    <PageContainer>
      <Header>
        <h1>Expert Texture Matching</h1>
        <p>
          Our skilled team specializes in seamlessly matching existing textures for repairs and renovations. 
          Whether it's a patch repair or a full wall renovation, we ensure the new texture blends perfectly 
          with the surrounding area, making repairs virtually invisible.
        </p>
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
    </PageContainer>
  );
}

export default TextureMatching; 