import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Posts from './../pages/Posts';
import Main from '../pages/Main';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/main' element={<Main />} />

      <Route path='*' element={<Navigate to='/posts' />} />
      <Route path='/posts' element={<Posts />} />
    </Routes>
  );
};

export default AppRouter;
