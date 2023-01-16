import React, { useState } from 'react'
import * as ReactDOM from 'react-dom/client'

const CustomColorPicker = ({ onChange }: any) => {
	const [state, setState] = useState('')

	const regex = /^#[0-9A-Fa-f]{0,6}$/g

	const handleChange = (e) => {
		const value = e.target.value
		if (!regex.test(value)) {
			return
		}
		setState(value)
		onChange(e)
	}

	return (
		<div className="flex" data-input>
			<input value={state} onChange={handleChange} type="color" />
			<input value={state} onChange={handleChange} type="text" />
		</div>
	)
}

export function customColorPickerTrait(editor: any) {
	editor.TraitManager.addType('custom-color', {
		templateInput: '',
		// Expects as return a simple HTML string or an HTML element
		createInput({ trait, ...args }) {
			const container = document.createElement('div')
			const reactInput = React.cloneElement(<CustomColorPicker onChange={(e) => this.onChange(e)} />, { type: 'color' })
			const root = ReactDOM.createRoot(container)
			root.render(reactInput)
			// console.log(container.getElementsByTagName('input'))
			// Here we can decide to use properties from the trait
			this.colorInput = reactInput
			return container
		},
		onEvent({ elInput, component, event }) {
			// console.log('onEvent', elInput)
			// const colorValue = elInput.querySelector('input[type=color]').value
			// const textValue = elInput.querySelector('input[type=text]').value
		},
	})
}
