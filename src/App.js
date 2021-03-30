import React from 'react'
import { ThemeContextProvider } from './contexts'
import { createGlobalStyle } from 'styled-components'
import { ThemeSwitcher } from './components'
import styled from 'styled-components'

export default function App() {
	return (
		<ThemeContextProvider>
			<GlobalStyle />
			<ContentWrapper>
				<h1>Theme Switching in React with Styled-Components</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
					voluptatum cum eum modi nobis{' '}
					<a href='https://aexcode.com' target='_blank' rel='noreferrer'>
						rerum voluptates
					</a>{' '}
					temporibus assumenda, nulla blanditiis tempora excepturi
					reprehenderit, aspernatur in optio amet, sit necessitatibus.
				</p>
				<ThemeSwitcher />
			</ContentWrapper>
		</ThemeContextProvider>
	)
}

const ContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr min(65ch, 100%) 1fr;
	padding: 1rem;

	* {
		grid-column: 2;
	}
`

const GlobalStyle = createGlobalStyle`
  *, 
  *:before, 
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
    font-family: ${({ theme }) => theme.fonts.main};
    line-height: 1.5em;
    
  }

  body  {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.35s linear;
  }

  h1 {
    color: ${({ theme }) => theme.colors.accent};
    padding: .5em 0;
    
  }

  p {
    padding: .5em 0; 
  }

  a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.accent};
	}
`
