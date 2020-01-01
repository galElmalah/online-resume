import React, { useContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import * as style from './MainContent.module.scss';
import { AboutPage } from './AboutPage/index';
import { ProjectsPage } from './ProjectsPage/index';
import { ThemeContext } from '../ThemeProvider/index';
import classnames from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BlogPage } from './BlogPage/index';
import { WorkExperiencePage } from './WorkExperiencePage/index';

export const MainContent = ({ isOpenMobile }) => {
  const location = useLocation();
  const [isNightMode] = useContext(ThemeContext);
  return (
    <div
      className={classnames({
        [style.contentContainer]: true,
        [style.night]: isNightMode
      })}
    >
      <TransitionGroup>
        <CSSTransition key={location.key} classNames={'fade'} timeout={300}>
          <Switch location={location}>
            <Route path='/about' exact component={AboutPage} />
            <Route path='/projects' exact component={ProjectsPage} />
            <Route path='/blog' exact component={BlogPage} />
            <Route path='/experience' exact component={WorkExperiencePage} />
            <Route path='/' exact component={AboutPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
