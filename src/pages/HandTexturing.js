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
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Header = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #005580 0%, #003854 100%);
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const SlideshowContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto 2rem;
  aspect-ratio: 16/9;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${slideIn} 0.5s ease-in-out;
  background: #f8f9fa;
  padding: 1rem;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 1.2rem;
    width: 40px;
    height: 40px;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 1rem;
`;

const NextButton = styled(NavigationButton)`
  right: 1rem;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#005580' : '#ccc'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#005580' : '#999'};
  }
`;

function HandTexturing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    { src: "/images/HT/ht1.jpg", alt: "Hand Texturing Example 1" },
    { src: "/images/HT/ht2.jpg", alt: "Hand Texturing Example 2" },
    { src: "/images/HT/ht3.jpg", alt: "Hand Texturing Example 3" },
    { src: "/images/HT/ht4.jpg", alt: "Hand Texturing Example 4" },
    { src: "/images/HT/ht5.jpg", alt: "Hand Texturing Example 5" },
    { src: "/images/HT/ht6.jpg", alt: "Hand Texturing Example 6" }
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
    <PageContainer>
      <Header>
        <h1>Hand Texturing</h1>
        <p>Experience the artistry of our expert hand texturing services. Each texture is carefully crafted to match your desired pattern and style, ensuring a unique and professional finish for your walls.</p>
      </Header>
      
      <SlideshowContainer>
        <SlideImage
          key={currentSlide}
          src={images[currentSlide].src}
          alt={images[currentSlide].alt}
        />
        <PrevButton onClick={prevSlide}>←</PrevButton>
        <NextButton onClick={nextSlide}>→</NextButton>
      </SlideshowContainer>

      <DotContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotContainer>

      <Footer />
    </PageContainer>
  );
}

export default HandTexturing; 