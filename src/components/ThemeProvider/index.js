import React from 'react'

export const ThemeContext = React.createContext(false)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(false)
  return <ThemeContext.Provider value={[theme, setTheme]}>
    {children}
  </ThemeContext.Provider>
}
