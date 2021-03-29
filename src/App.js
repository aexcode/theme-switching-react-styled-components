import React from 'react'
import { ThemeContextProvider } from './contexts'

export default function App() {
	return (
		<ThemeContextProvider>
			<h1>Theming Practice</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
				voluptatum cum eum modi nobis rerum voluptates temporibus assumenda,
				nulla blanditiis tempora excepturi reprehenderit, aspernatur in optio,
				molestias sit necessitatibus ab.
			</p>
		</ThemeContextProvider>
	)
}
