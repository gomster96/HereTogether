import React from 'react';
import { css } from '@emotion/react';
import PostList from './post-list/index';
import InitialPage from './inital-screen/index';
import WritePage from './write-page/index';
import ChatPage from './chat-page/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/mainPage" element={<PostList />} />
        <Route path="/writePage" element={<WritePage />} />
        <Route path="/chatPage" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
