import React, { useEffect, useState } from 'react'
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

	useEffect(() => {
		console.log('ENTREI USEFFECT')
		const interval = setInterval(() => console.log('INTERVAL'), 1000)

		return () => {
			console.log('ENTREI UNMOUNT')
			clearInterval(interval)
		}
	}, [])

	return (
		<div className="flex" data-input>
			<input id="color" value={state} onChange={handleChange} type="color" />
			<input className="bg-[#f1f1f1]" value={state} onChange={handleChange} type="text" />
		</div>
	)
}

export function customColorPickerTrait(editor: any) {
	editor.TraitManager.addType('custom-color', {
		templateInput: '',
		// Expects as return a simple HTML string or an HTML element
		createInput({ trait, ...args }) {
			return this.container
		},
		init() {
			this.container = document.createElement('div')
		},
		onEvent({ elInput, component }) {
			const colorValue = elInput.querySelector('input[type=color]').value

			component.addAttributes({ titleColor: colorValue })
		},
		onRender() {
			const reactInput = React.cloneElement(<CustomColorPicker onChange={(e) => this.onChange(e)} />, { type: 'color' })

			if (this.root) {
				this.root.unmount()
			}
			this.root = ReactDOM.createRoot(this.container)

			this.root.render(reactInput)
		},
	})
}
