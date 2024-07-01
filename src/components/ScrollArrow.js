// ScrollArrow.js
import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import styled from '@emotion/styled';
import { MAIN_BG_COLOR } from '../style';

const ArrowContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 1000;
  animation: bounce 2s infinite;
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

const ArrowIcon = styled(FaArrowDown)`
  font-size: 2rem;
  color: #273c75; /* Change the color to fit your design */
`;

const ScrollArrow = ({ targetId }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust this value as needed
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = () => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ArrowContainer onClick={scrollToSection} visible={visible}>
      <ArrowIcon />
    </ArrowContainer>
  );
};

export default ScrollArrow;
