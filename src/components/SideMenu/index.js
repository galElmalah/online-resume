import React from 'react';
import * as style from './SideMenu.module.scss';
import {InfoCard} from '../InfoCard/index';
import {SideNavigation} from './SideNavigation';


export const SideMenu = () => {
  return <nav className={style.sideMenu}>
    <InfoCard/>
    <SideNavigation/>
  </nav>;
};
