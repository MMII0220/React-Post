import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/UI/pages/About';
import Posts from './components/UI/pages/Posts';
import './styles/App.css';


const App = () => {
  return (
    <BrowserRouter>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/posts'>
          <Posts />
        </Route>
    </BrowserRouter>
  );
};

export default App;
