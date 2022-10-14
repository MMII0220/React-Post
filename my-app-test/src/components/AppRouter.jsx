import React from 'react';
import {
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import About from '../pages/About';
import Posts from './../pages/Posts';
import Main from '../pages/Main';


const AppRouter = () => {
    return (
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />

          <Route path="*" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
        </Routes>
    );
};

export default AppRouter;
