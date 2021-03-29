import React, { useContext } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../contexts'
import themes from '../themes'

export const Theme = ({ children }) => {
	const { theme } = useContext(ThemeContext)
	console.log(themes)
	return (
		<ThemeProvider theme={themes[theme] ? themes[theme] : themes['dark']}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}

// const themes = {
// 	dark: {
// 		background: '#272823',
// 		title: '#b39ddb',
// 		text: '#fffafa',
// 	},
// 	light: {
// 		background: '#fffafa',
// 		title: '#b39ddb',
// 		text: '#222222',
// 	},
// }

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
