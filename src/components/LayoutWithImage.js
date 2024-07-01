import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTransition, animated } from '@react-spring/web';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh; /* Full height of the viewport */
  direction: rtl;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: right;
`;

const PhotoWrapper = styled.div`
  width: 50%; /* Half the width of the viewport */
  height: 100%;
  position: relative;
  border-radius: 50% 0 0 50%;
`;

const PhotoContainer = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 50% 0 0 50%;
`;

const Paragraph = styled.p`
  font-size: 24px; /* Make the font size larger */
  line-height: 3; /* Improve readability with line height */
  margin: 0; /* Remove default margins */
  text-align: justify;
`;

const LayoutWithImage = ({ photoUrls, text, signature }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photoUrls.length > 1) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % photoUrls.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [photoUrls.length]);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 }, // You can adjust the duration here
  });

  return (
    <LayoutContainer>
      <PhotoWrapper>
        {transitions((style, i) => (
          <PhotoContainer
            key={i}
            style={{
              ...style,
              backgroundImage: `url(${photoUrls[i]})`,
            }}
          />
        ))}
      </PhotoWrapper>
      <TextContainer>
        <Paragraph>
          {text}
          {signature}
        </Paragraph>
      </TextContainer>
    </LayoutContainer>
  );
};

export default LayoutWithImage;
