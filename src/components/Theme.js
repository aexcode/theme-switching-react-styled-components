import React, { useContext } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../contexts'

export const Theme = ({ children }) => {
	const { theme } = useContext(ThemeContext)
	return (
		<ThemeProvider theme={themes[theme] ? themes[theme] : themes['dark']}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}

const themes = {
	dark: {
		background: '#272823',
		title: '#b39ddb',
		text: '#fffafa',
	},
	light: {
		background: '#fffafa',
		title: '#b39ddb',
		text: '#222222',
	},
}

const GlobalStyle = createGlobalStyle`
  *, 
  *:before, 
  *:after {
    box-sizing: border-box;    
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5em;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  h1 {
    color: ${({ theme }) => theme.title};
  }
`
