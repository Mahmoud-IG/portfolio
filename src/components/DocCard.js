import React from 'react';
import styled from '@emotion/styled';
import { FaFileAlt, FaCalendarAlt } from 'react-icons/fa';
import { SECONDARY_TEXT_COLOR } from '../style';

const CardContainer = styled.a`
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
  padding: 20px;
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) rotate(-1deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: 'Amiri', serif;
  font-size: 24px;
`;

const CardIcon = styled.div`
  margin-left: 8px;
`;

const CardDate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-family: 'Amiri', serif;
  font-size: 18px;
  color: ${SECONDARY_TEXT_COLOR};
`;

const CardContent = styled.div`
  font-family: 'Amiri', serif;
  font-size: 16px;
  text-align: justify;
`;

const DocCard = ({ title, date, content, link }) => {
  return (
    <CardContainer href={link} target="_blank" rel="noopener noreferrer">
      <CardTitle>
        <CardIcon>
          <FaFileAlt size={24} />
        </CardIcon>
        {title}
      </CardTitle>
      <CardDate>
        <CardIcon>
          <FaCalendarAlt size={18} />
        </CardIcon>
        {date}
      </CardDate>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

export default DocCard;
