import React from 'react';
import { css } from '@emotion/react';
import PostList from './post-list';
import InitialPage from './initial-screen/Index';
import WritePage from './writePage/index';
import '../style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/wirtePage/" element={<WritePage />} />
      </Routes>
    </Router>
  );
}

export default App;
