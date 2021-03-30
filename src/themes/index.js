import dark from './dark'
import light from './light'
import magenta from './magenta'

export const themes = {
	dark,
	light,
	magenta,
}

export const themePreviews = [
	{
		name: 'dark',
		background: dark.colors.background,
		text: dark.colors.text,
	},
	{
		name: 'light',
		background: light.colors.background,
		text: light.colors.text,
	},
	{
		name: 'magenta',
		background: magenta.colors.background,
		text: magenta.colors.text,
	},
]
