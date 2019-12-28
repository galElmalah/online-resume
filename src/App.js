import React from 'react';
import './App.css';
import { SideMenu } from './components/SideMenu';
import { MainContent } from './components/MainContent/index';
import { ThemeContext } from './components/ThemeProvider/index';

const App = () => {
  const [isNightMode] = React.useContext(ThemeContext);
  const [isOpenMobile, setIsOpenMobile] = React.useState(false);

  return (
    <div className={`app ${isNightMode ? 'app-night' : ''}`}>
      <SideMenu isOpenMobile={isOpenMobile} setIsOpenMobile={setIsOpenMobile} />
      <MainContent isOpenMobile={isOpenMobile} />
    </div>
  );
};

export default App;
