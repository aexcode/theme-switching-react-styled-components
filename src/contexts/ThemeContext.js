import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState('dark')

	const switchTheme = (theme) => setTheme(theme)

	return (
		<ThemeContext.Provider value={{ theme, switchTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
