import { FormEvent, useCallback, useRef } from 'react'

// This hook is a helper that assists to manage the component block model states,
// as there are no stateful components on elements which are controlled by traits,
// this becomes helpful as it defines initial values a handles editable contents.
export function useComponentModel({ key, model, defaultValue, isEditorMode }) {
	const defaultValueRef = useRef(defaultValue)
	const onInput = useCallback(() => {
		// Outside editor mode, we do nothing.
		if (!isEditorMode) return () => undefined

		return (event: FormEvent<HTMLHeadingElement>) => {
			const text = event.currentTarget.innerHTML
			model.addAttributes({ [key]: text }, undefined)
		}
	}, [key, model])

	return { defaultValue: defaultValueRef.current, onInput, model, key }
}
