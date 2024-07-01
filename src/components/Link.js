import React from 'react';
import styled from '@emotion/styled';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SECONDARY_TEXT_COLOR } from '../style';

const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${SECONDARY_TEXT_COLOR};
  margin: 5px 0;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

const LinkIcon = styled(FaExternalLinkAlt)`
  margin-left: 8px;
`;

const LinkTitle = styled.span`
  font-size: 16px;
`;

const Link = ({ href, title }) => {
  return (
    <LinkContainer href={href} target="_blank" rel="noopener noreferrer">
      <LinkIcon />
      <LinkTitle>{title}</LinkTitle>
    </LinkContainer>
  );
};

export default Link;
