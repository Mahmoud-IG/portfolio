import React from 'react';
import styled from '@emotion/styled';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Link from './Link'; // Assuming Link component is already created
import { SECONDARY_TEXT_COLOR } from '../style';

const SectionContainer = styled.div`
  padding: 48px;
  position: relative; /* Ensure relative positioning for pseudo-element */

  /* Style for the bottom border */
  &::after {
    content: '';
    position: absolute;
    left: 50%; /* Center the line horizontally */
    transform: translateX(-50%);
    bottom: 0;
    width: 95%; /* Adjust the width of the line */
    height: 1px; /* Adjust the thickness of the line */
    background-color: #bdc3c7; /* Line color */
  }

  /* Remove the bottom border for the last child */
  &:last-child::after {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const IconContainer = styled.div`
  margin-left: 15px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin: 0;
  flex-grow: 1;
  font-weight: bold;
  color: ${SECONDARY_TEXT_COLOR};
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${SECONDARY_TEXT_COLOR};
`;

const DateIcon = styled(FaRegCalendarAlt)`
  margin-left: 10px;
  margin-bottom: 5px;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 1.8;
  text-align: justify;
  margin: 20px 0;
  color: ${SECONDARY_TEXT_COLOR};
`;

const LinksContainer = styled.div`
  margin-top: 20px;
  width: fit-content;
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 18px;
  color: ${SECONDARY_TEXT_COLOR};
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Space between images */
  margin-top: 20px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%; /* Make the images circular */
`;

const Section = ({ id, icon, title, date, text, links, images }) => {
  return (
    <SectionContainer id={id}>
      {(icon || title) && (
        <Row>
          {icon && <IconContainer>{icon}</IconContainer>}
          {title && <Title>{title}</Title>}
        </Row>
      )}
      {date && (
        <Row>
          <DateContainer>
            <DateIcon />
            {date}
          </DateContainer>
        </Row>
      )}
      {text && <Text>{text}</Text>}
      {links && links.length > 0 && (
        <LinksContainer>
          {links.map((link, index) => (
            <StyledLink key={index} href={link.href} title={link.title} />
          ))}
        </LinksContainer>
      )}
      {images && images.length > 0 && (
        <ImageGallery>
          {images.map((image, index) => (
            <Image key={index} src={image.src} alt={image.alt} />
          ))}
        </ImageGallery>
      )}
    </SectionContainer>
  );
};

export default Section;
