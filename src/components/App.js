import React from 'react';
import { Global } from '@emotion/react';
import style from '../style';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './TopBar';
import Home from './Home';
import About from './About';
import Observations from './Observations';
import LessonPlanning from './LessonPlanning';
import Activities from './Activities';
import Feedback from './Feedback';
import LearningCenter from './LearningCenter';
import PhotosAndVideos from './PhotosAndVideos';
import Summary from './Summary';
import Overview from './Overview';

const App = () => {
  return (
    <>
      <Global styles={style} />
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/observations" element={<Observations />} />
          <Route path="/lessonPlanning" element={<LessonPlanning />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/learningCenter" element={<LearningCenter />} />
          <Route path="/photosAndVideos" element={<PhotosAndVideos />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
