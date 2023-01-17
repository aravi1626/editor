import { forwardRef, useImperativeHandle, useState } from 'react'

import { ComponentWithTrait, ComponentWithTraitProps, EventParam, UpdateParam } from '../types'

export const CustomColorPicker: ComponentWithTrait = forwardRef(function component(
	{ onChange }: ComponentWithTraitProps,
	ref
) {
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

	// We pass ref to imperative handler so grapes traits view can connect the update cycle.
	useImperativeHandle(ref, () => ({
		onEvent({ elInput, component, trait }: EventParam) {
			const hexValue = (elInput.querySelector('input[type=color]') as HTMLInputElement).value
			component.addAttributes({ [trait.id]: hexValue }, undefined)
		},
		onUpdate({ component, trait }: UpdateParam) {
			// This will be called on mount, so sync the editor state with component state.
			setState(component.getAttributes()[trait.id])
		},
	}))

	return (
		<div className="flex">
			<input
				className="w-[50px!important] h-auto aspect-square"
				id="color"
				value={state}
				onChange={handleChange}
				type="color"
			/>
			<input className="bg-[#f1f1f1]" value={state} onChange={handleChange} type="text" />
		</div>
	)
})

CustomColorPicker.editor = {
	traitType: 'custom-color',
}
