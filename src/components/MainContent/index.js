import React from 'react';
import {Switch, Route} from 'react-router-dom';
import * as style from './MainContent.module.scss'
import { AboutPage } from './AboutPage/index';
import { ProjectsPage } from './ProjectsPage/index';

const PlaceHolder = ({name}) => <h1>{name}</h1>;

export const MainContent = () => {
  return(
  <div className={style.contentContainer}> 
  <Switch>
    <Route path="/about" exact component={AboutPage}/>}/>
    <Route path="/projects" exact component={ProjectsPage}/>
    <Route path="/blog" exact render={() => <PlaceHolder name={'blog'}/>}/>
    <Route path="/" exact component={AboutPage}/>}/>

  </Switch>
  </div>);
};
