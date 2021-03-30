import React, { useContext } from 'react'
import { ThemeContext } from '../contexts'
import styled from 'styled-components'
import { themePreviews } from '../themes'

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	return (
		<Wrapper>
			{themePreviews.map((preview, i) => (
				<Label htmlFor={preview.name} key={i}>
					{' '}
					{preview.name}
					<Input
						type='radio'
						name='theme'
						id={preview.name}
						onChange={() => setTheme(preview.name)}
						checked={theme === preview.name ? true : false}
					/>
				</Label>
			))}
		</Wrapper>
	)
}

const Wrapper = styled.form``
const Label = styled.label``
const Input = styled.input``
