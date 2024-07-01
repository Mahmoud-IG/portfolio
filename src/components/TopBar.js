import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaEye,
  FaBook,
  FaTasks,
  FaComments,
  FaUniversity,
  FaCamera,
  FaFileAlt,
  FaChartBar,
  FaUser,
} from 'react-icons/fa'; // Importing FontAwesome icons
import { MAIN_BG_COLOR, MAIN_TEXT_COLOR, SECONDARY_TEXT_COLOR } from '../style';

const TopBarContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: ${MAIN_BG_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  direction: rtl; /* Ensure right-to-left direction */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px; /* Space between links */
`;

const TopBarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${MAIN_TEXT_COLOR};
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  transition: background-color 0.3s ease;
  border-radius: 4px;

  &:hover {
    background-color: ${SECONDARY_TEXT_COLOR};
  }

  &.active {
    font-weight: bold;
    background-color: #273c75;
  }

  svg {
    margin-left: 5px; /* Space between icon and text */
  }
`;

const links = [
  { path: '/', name: 'الرئيسة', icon: <FaHome /> },
  { path: '/about', name: 'من أنا', icon: <FaUser /> },
  { path: '/observations', name: 'المشاهدات', icon: <FaEye /> },
  { path: '/lessonPlanning', name: 'تخطيط وسيرورة الدروس', icon: <FaBook /> },
  { path: '/activities', name: 'الفعاليات اللامنهجية', icon: <FaTasks /> },
  { path: '/feedback', name: 'تغذية مرتدة', icon: <FaComments /> },
  { path: '/learningCenter', name: 'مركز التعلم', icon: <FaUniversity /> },
  { path: '/photosAndVideos', name: 'صور وفيديوهات', icon: <FaCamera /> },
  { path: '/summary', name: 'الإجمال', icon: <FaFileAlt /> },
  { path: '/overview', name: 'نظرة إلى العام الدراسي', icon: <FaChartBar /> },
];

const TopBar = () => {
  return (
    <TopBarContainer>
      <NavLinks>
        {links.map((link) => (
          <TopBarLink key={link.path} to={link.path} activeClassName="active" exact>
            {link.icon}
            {link.name}
          </TopBarLink>
        ))}
      </NavLinks>
    </TopBarContainer>
  );
};

export default TopBar;
