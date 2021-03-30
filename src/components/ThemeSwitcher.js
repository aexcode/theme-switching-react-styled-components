import React, { useContext } from 'react'
import { ThemeContext } from '../contexts'
import styled from 'styled-components'
import { themePreviews } from '../themes'

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	return (
		<Wrapper>
			<form>
				{themePreviews.map((preview, i) => (
					<Label
						htmlFor={preview.name}
						key={i}
						background={preview.background}
						text={preview.text}>
						{preview.name}{' '}
						<Input
							type='radio'
							name='theme'
							id={preview.name}
							onChange={() => setTheme(preview.name)}
							checked={theme === preview.name ? true : false}
						/>
					</Label>
				))}
			</form>
		</Wrapper>
	)
}

const Wrapper = styled.aside`
	padding: 1rem 0;
	margin: 1em 0;
	border-left: 5px solid ${({ theme }) => theme.colors.accent};
	border-radius: 5px;
	background: ${({ theme }) => theme.colors.accent};
	display: inline-block;
`
const Label = styled.label`
	display: inline-block;
	padding: 1em 1.5em;
	margin: 0.5rem;
	border-radius: 5px;
	text-transform: uppercase;
	letter-spacing: 0.125em;
	font-size: 0.8rem;
	background: ${(props) => props.background};
	color: ${(props) => props.text};
	cursor: pointer;
`
const Input = styled.input`
	font-weight: bold;
`
