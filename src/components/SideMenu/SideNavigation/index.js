import React from 'react';
import * as style from './SideNavigation.module.scss';

import {NavLink} from 'react-router-dom';

export const links = [
  {name: 'About me', url: 'about'},
  {name: 'Projects', url: 'projects'},
  {name: 'Blog', url: 'blog'},
];

export const SideNavigation = () => {
  return <ul className={style.navigation}>
    {links.map(({name, url}) => {
      return <li key={url}>
        <NavLink to={url} activeClassName={style.activeNavLink} >
          {name}
        </NavLink>
      </li>;
    })}
  </ul>;
};
