import React, { useState } from 'react';
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

const WorkContainer = styled.div`
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem;
  max-width: 1800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
`;

const SmallImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0 2rem 2rem;
  max-width: 1800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
`;

const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 4/3;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    aspect-ratio: 3/2;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImageTitle = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0.3rem;
  }
`;

const ExpandText = styled.div`
  font-size: 1rem;
  color: #4db8ff;
  text-align: center;
  padding: 0.3rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
  cursor: pointer;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const SmallImageCard = styled(ImageCard)`
  max-width: 100%;
`;

const SmallImageContainer = styled(ImageContainer)`
  aspect-ratio: 3/2;
`;

const BeforeAndAfter = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const mainImages = [
    {
      src: "images/work/IMG_7965.jpg",
      alt: "Metal Framing Construction - Before",
      type: "Before"
    },
    {
      src: "images/work/IMG_0436.jpg",
      alt: "Garage Completion - After",
      type: "After"
    },
    {
      src: "images/work/image00000028129.jpg",
      alt: "Ceiling Damage - Before",
      type: "Before"
    },
    {
      src: "images/work/image00000028229.jpg",
      alt: "Repaired Ceiling - After",
      type: "After"
    },
    {
      src: "images/work/IMG_8198.jpg",
      alt: "Construction Area - Before",
      type: "Before"
    },
    {
      src: "images/work/View_recent_photos.jpg",
      alt: "Recent Work Photos - After",
      type: "After"
    }
  ];

  const smallImages = [
    {
      src: "images/work/before0.jpg",
      alt: "Project Before",
      type: "Before"
    },
    {
      src: "images/work/after01.jpg",
      alt: "Project After - View 1",
      type: "After"
    },
    {
      src: "images/work/after02.jpg",
      alt: "Project After - View 2",
      type: "After"
    }
  ];

  return (
    <WorkContainer>
      <Header>
        <Title>Before and After Gallery</Title>
        <Subtitle>Explore our transformative work through these before and after comparisons</Subtitle>
      </Header>
      <GalleryGrid>
        {mainImages.map((image, index) => (
          <ImageCard key={index} onClick={() => setSelectedImage(image)}>
            <ImageContainer>
              <Image src={image.src} alt={image.alt} loading="lazy" />
            </ImageContainer>
            <ImageTitle>{image.type}</ImageTitle>
            <ExpandText>Click to expand image</ExpandText>
          </ImageCard>
        ))}
      </GalleryGrid>
      <SmallImagesGrid>
        {smallImages.map((image, index) => (
          <SmallImageCard key={index} onClick={() => setSelectedImage(image)}>
            <SmallImageContainer>
              <Image src={image.src} alt={image.alt} loading="lazy" />
            </SmallImageContainer>
            <ImageTitle>{image.type}</ImageTitle>
            <ExpandText>Click to expand image</ExpandText>
          </SmallImageCard>
        ))}
      </SmallImagesGrid>
      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <ModalImage src={selectedImage.src} alt={selectedImage.alt} onClick={e => e.stopPropagation()} />
          <CloseButton onClick={() => setSelectedImage(null)}>×</CloseButton>
        </Modal>
      )}
      <Footer />
    </WorkContainer>
  );
};

export default BeforeAndAfter; 