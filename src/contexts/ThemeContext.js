import React, { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from '../themes'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState('black')

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<ThemeProvider theme={themes[theme] ? themes[theme] : themes['black']}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}
