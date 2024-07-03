import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Modal from "react-modal";
import imgPlaceholder from "../../imgs/img-ph-150.png";
import sampleVideo from "../../vids/mov_bbb.mp4";
import img1 from "../../imgs/ODT/img1.jpg";

Modal.setAppElement("#root");

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  padding: 95px 20px 20px 20px;
`;

const MediaItem = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img,
  video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 8px;
  }

  video {
    object-fit: cover;
  }
`;

const PlayIcon = styled(FaPlay)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: white;
  pointer-events: none;
  opacity: 0.7;
`;

const ViewerModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ViewerContent = styled.div`
  position: relative;
  width: 80%;
  max-width: 900px;
  min-width: 400px;
  min-height: 400px;
  max-height: calc(100vh - 75px);
  overflow: hidden;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 200px;
  background-color: black;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }

  ${({ direction }) => direction === "left" && "left: 10px;"}
  ${({ direction }) => direction === "right" && "right: 10px;"}
`;

const media = [
  { type: "image", src: imgPlaceholder, alt: "Sample Image 1" },
  { type: "image", src: imgPlaceholder, alt: "Sample Image 2" },
  { type: "video", src: sampleVideo, alt: "Sample Video 1" },
  { type: "image", src: imgPlaceholder, alt: "Sample Image 3" },
  { type: "video", src: sampleVideo, alt: "Sample Video 2" },
  { type: "image", src: img1, alt: "Sample Image 3" },
];

const PhotosAndVideos = () => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);

  const openViewer = (index) => {
    setSelectedMediaIndex(index);
  };

  const closeViewer = () => {
    setSelectedMediaIndex(null);
  };

  const showPrevMedia = () => {
    setSelectedMediaIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : media.length - 1
    );
  };

  const showNextMedia = () => {
    setSelectedMediaIndex((prevIndex) =>
      prevIndex < media.length - 1 ? prevIndex + 1 : 0
    );
  };

  const selectedMedia =
    selectedMediaIndex !== null ? media[selectedMediaIndex] : null;

  return (
    <>
      <GridContainer>
        {media.map((item, index) => (
          <MediaItem key={index} onClick={() => openViewer(index)}>
            {item.type === "video" ? (
              <>
                <video src={item.src} />
                <PlayIcon />
              </>
            ) : (
              <img src={item.src} alt={item.alt} />
            )}
          </MediaItem>
        ))}
      </GridContainer>

      {selectedMedia && (
        <ViewerModal
          isOpen={!!selectedMedia}
          onRequestClose={closeViewer}
          contentLabel="Media Viewer"
          style={{
            overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
            content: {
              background: "none",
              border: "none",
              padding: "none",
              inset: "unset",
            },
          }}
        >
          <ViewerContent>
            {selectedMedia.type === "video" ? (
              <video src={selectedMedia.src} controls autoPlay />
            ) : (
              <img src={selectedMedia.src} alt={selectedMedia.alt} />
            )}
            <CloseButton onClick={closeViewer}>&times;</CloseButton>
            <NavButton onClick={showPrevMedia} direction="left">
              <FaArrowLeft />
            </NavButton>
            <NavButton onClick={showNextMedia} direction="right">
              <FaArrowRight />
            </NavButton>
          </ViewerContent>
        </ViewerModal>
      )}
    </>
  );
};

export default PhotosAndVideos;
