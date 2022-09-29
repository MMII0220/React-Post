import React from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from "./components/AppRouter";
import './styles/App.css';
  


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <AppRouter />
    </BrowserRouter>
  );
}
