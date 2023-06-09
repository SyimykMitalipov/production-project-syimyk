import React, { FC, ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME, ThemeContext, Theme } from './ThemeContext'

const defaultTheme  = localStorage.getItem(LOCAL_STORAGE_THEME) as  Theme || Theme.LIGHT;


const ThemeProvider: FC = ({ children }) => {
  const [ theme, setTheme ] = useState<Theme>(defaultTheme);


  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [ theme ])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider