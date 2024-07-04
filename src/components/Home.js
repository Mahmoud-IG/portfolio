import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import videoSrc from '../../vids/mahmoud_intro.mp4';

const Container = styled.div`
  height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  margin-top: 75px;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none; /* Prevents user interaction */
`;

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <Container>
      <VideoWrapper>
        <StyledVideo ref={videoRef} loop autoPlay>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
      </VideoWrapper>
    </Container>
  );
};

export default Home;
