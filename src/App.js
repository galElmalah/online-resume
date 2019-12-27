import React from 'react';
import './App.css';
import {SideMenu} from './components/SideMenu';
// import BrowserRouter from 'react-router-dom';
import { MainContent } from './components/MainContent/index';

const App = () => {
  return (
    <div className="App">
      <SideMenu/>
      <MainContent/>
    </div>
  );
};

export default App;
