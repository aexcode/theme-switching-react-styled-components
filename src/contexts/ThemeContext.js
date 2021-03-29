import React, { createContext, useState } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import themes from '../themes'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState('dark')

	const switchTheme = (theme) => setTheme(theme)

	return (
		<ThemeContext.Provider value={{ theme, switchTheme }}>
			<ThemeProvider theme={themes[theme] ? themes[theme] : themes['dark']}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}

const GlobalStyle = createGlobalStyle`
  *, 
  *:before, 
  *:after {
    box-sizing: border-box;    
    font-family: ${({ theme }) => theme.fonts.main};
    line-height: 1.5em;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    color: ${({ theme }) => theme.colors.title};
  }
`
