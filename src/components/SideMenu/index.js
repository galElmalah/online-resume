import React from 'react';
import * as style from './SideMenu.module.scss';
import { InfoCard } from '../InfoCard/index';
import { SideNavigation } from './SideNavigation';
import { NightModeToggle } from './NightModeToggle/index';
import { ThemeContext } from '../ThemeProvider/index';
import classnames from 'classnames';

export const SideMenu = ({ isOpenMobile, setIsOpenMobile }) => {
  const [iseNightMode] = React.useContext(ThemeContext);
  const classes = classnames({
    [style.sideMenu]: true,
    [style.night]: iseNightMode,
    [style.open]: isOpenMobile
  });
  return (
    <nav
      className={classes}
      onClick={() => setIsOpenMobile(prevState => !prevState)}
    >
      <NightModeToggle />
      <SideNavigation />
      <InfoCard />
    </nav>
  );
};
