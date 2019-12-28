import React from 'react';
import * as style from './SideMenu.module.scss';
import { InfoCard } from '../InfoCard/index';
import { SideNavigation } from './SideNavigation';
import { NightModeToggle } from './NightModeToggle/index';
import { ThemeContext } from '../ThemeProvider/index';
import classnames from 'classnames';

const LineText = ({ word }) => (
  <div className={style.menu}>
    <span className={style.line} />
    {word.split('').map((letter, i) => (
      <div key={i} className={style.letter}>
        {letter}
      </div>
    ))}
  </div>
);

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
      <LineText word='MENU' />
      <NightModeToggle />
      <SideNavigation />
      <InfoCard />
    </nav>
  );
};
