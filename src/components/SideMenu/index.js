import React from 'react'
import * as style from './SideMenu.module.scss'
import { InfoCard } from '../InfoCard/index'
import { SideNavigation } from './SideNavigation'
import { NightModeToggle } from './NightModeToggle/index'
import { ThemeContext } from '../ThemeProvider/index'

export const SideMenu = () => {
  const [iseNightMode] = React.useContext(ThemeContext)
  return <nav className={`${style.sideMenu} ${iseNightMode ? style.night : ''}`}>
    <NightModeToggle/>
    <SideNavigation/>
    <InfoCard/>
  </nav>
}
