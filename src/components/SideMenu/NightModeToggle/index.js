import React from 'react'
import { Toggle } from 'react-toggle-component'
import { ThemeContext } from '../../ThemeProvider'

export const NightModeToggle = () => {
  const [isNightMode, setIsNightMode] = React.useContext(ThemeContext)
  return (

    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <label htmlFor="toggle-1" style={{ fontWeight: '600', fontSize: '30px', marginRight: '10px' }}>{isNightMode ? '🌚' : '🌞' }</label>
      <Toggle
        leftBackgroundColor="lightgray"
        rightBackgroundColor="black"
        borderColor="white"
        knobColor="white"
        name="toggle-1" onToggle={() => setIsNightMode(prevTheme => !prevTheme)}
      />
    </div>

  )
}
