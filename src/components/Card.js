import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const CardContainer = styled(Link)`
  position: relative;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  height: 100%;
  max-height: 800px;
  min-height: 400px;
  margin: 0 auto;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover .description {
    opacity: 1;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.div`
  padding: 10px;
  background-color: white;
  text-align: center;
  font-family: 'Amiri', serif;
  font-size: 18px;
`;

const CardDescription = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-family: 'Amiri', serif;
  font-size: 16px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 20px;
`;

const Card = ({ image, title, description, link }) => {
  return (
    <CardContainer to={link}>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription className="description">{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;
