import React from 'react';
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

const ContactContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #005580 0%, #003854 100%);
  color: white;
  animation: ${fadeIn} 1s ease-out;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  @media (min-width: 769px) {
    padding: 2rem;
  }
`;

const ContactHeader = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  background: linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.5px;
  font-weight: 700;
  text-align: center;

  @media (min-width: 769px) {
    font-size: 3rem;
    margin: 2rem 0;
    letter-spacing: -1px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  margin: 1rem auto;
  padding: 0 0.5rem;
  box-sizing: border-box;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 0;
    margin: 2rem auto;
  }
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.25rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 769px) {
    padding: 2rem;
    border-radius: 15px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;

  @media (min-width: 769px) {
    margin-bottom: 1.5rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.95rem;
  color: #4db8ff;
  font-weight: 500;

  @media (min-width: 769px) {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  appearance: none;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #4db8ff;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 10px rgba(77, 184, 255, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  @media (min-width: 769px) {
    padding: 0.9rem;
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 100px;
  resize: vertical;

  @media (min-width: 769px) {
    min-height: 150px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #4db8ff 0%, #0099ff 100%);
  color: white;
  padding: 0.9rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(77, 184, 255, 0.3);
  -webkit-tap-highlight-color: transparent;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(77, 184, 255, 0.4);
    background: linear-gradient(135deg, #66c2ff 0%, #1aa3ff 100%);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (min-width: 769px) {
    padding: 1rem;
    font-size: 1.1rem;
    margin-top: 1rem;
  }
`;

const ContactInfo = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 1.25rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 1s ease-out 0.6s backwards;
  width: 100%;
  box-sizing: border-box;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #4db8ff;
  }

  @media (min-width: 769px) {
    padding: 2rem;
    border-radius: 15px;

    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const ContactItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;

  svg {
    width: 20px;
    height: 20px;
    color: #4db8ff;
    flex-shrink: 0;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    word-break: break-word;
    -webkit-tap-highlight-color: transparent;
    font-size: 0.95rem;

    &:hover {
      color: #4db8ff;
    }
  }

  span {
    font-size: 0.95rem;
  }

  @media (min-width: 769px) {
    margin-bottom: 1.25rem;
    gap: 1rem;
    font-size: 1.1rem;

    svg {
      width: 24px;
      height: 24px;
    }

    a, span {
      font-size: 1.1rem;
    }
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <ContactContent>
        <ContactHeader>Contact Us</ContactHeader>
        <ContactGrid>
          <ContactForm 
            action="https://formspree.io/f/xjkkldej" 
            method="POST"
          >
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="_replyto"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Phone</Label>
              <Input
                type="tel"
                name="phone"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <TextArea
                name="message"
                required
              />
            </FormGroup>
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <SubmitButton type="submit">
              Send Message
            </SubmitButton>
          </ContactForm>

          <ContactInfo>
            <h2>Get in Touch</h2>
            <ContactItem>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+17024850011">(702) 485-0011</a>
            </ContactItem>
            <ContactItem>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:affordabledrywall702@gmail.com">affordabledrywall702@gmail.com</a>
            </ContactItem>
            <ContactItem>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Las Vegas, Nevada</span>
            </ContactItem>
          </ContactInfo>
        </ContactGrid>
      </ContactContent>
      <Footer />
    </ContactContainer>
  );
}

export default Contact; 