import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { GithubProvider } from './components/GithubProvider/index';
import { ThemeProvider } from './components/ThemeProvider/index';
ReactDOM.render(
  <HashRouter basename={'/online-resume'}>
    <GithubProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </GithubProvider>
  </HashRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
