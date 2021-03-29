import React, { createContext, useState } from 'react'

// ThemeContext =====
export const ThemeContext = createContext()

// ThemeContextProvider =====
export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState('light')

	const switchTheme = (theme) => setTheme(theme)

	return (
		<ThemeContext.Provider value={{ theme, switchTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
