import React from 'react';
import * as style from './SideNavigation.module.scss';

import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../ThemeProvider/index';
import classnames from 'classnames';
export const links = [
  { name: 'About me', url: 'about' },
  { name: 'Projects', url: 'projects' },
  { name: 'Blog', url: 'blog' },
  { name: 'Experience', url: 'experience' }
];

export const SideNavigation = () => {
  const [iseNightMode] = React.useContext(ThemeContext);

  return (
    <ul className={style.navigation}>
      {links.map(({ name, url }) => {
        return (
          <li key={url} className={classnames({ [style.night]: iseNightMode })}>
            <NavLink
              to={url}
              activeClassName={classnames({
                [style.activeNavLink]: true,
                [style.night]: iseNightMode
              })}
            >
              {name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
