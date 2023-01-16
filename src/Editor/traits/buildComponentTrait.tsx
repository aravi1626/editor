import React from 'react'
import * as ReactDOM from 'react-dom/client'

import { EditorInstance, TraitView } from './types'

export function buildComponentTrait(editor: EditorInstance, Component: any) {
	const componentEditorProps = {
		traitType: Component?.editor.traitType ?? 'unknown',
		onEvent: Component?.editor.onEvent ?? (() => undefined),
	}

	editor.TraitManager.addType(componentEditorProps.traitType, {
		// This will return the component container to the view.
		createInput() {
			return this.container
		},
		// Init will be called once, so we create the container element here.
		init() {
			this.container = document.createElement('div')
			this.containerRef = React.createRef()
		},
		// We call imperatively the component reference event onEvent
		onEvent(changeEvent) {
			this.containerRef.current?.onEvent?.(changeEvent)
		},
		// We call imperatively the component reference event onUpdate
		onUpdate(updateEvent) {
			this.containerRef.current?.onUpdate?.(updateEvent)
		},
		onRemove() {
			// Cleanup react component.
			if (this.root) {
				this.root.unmount()
				this.root = undefined
			}
		},
		// React component will be created and injected to container here,
		// this render will be called on every render of the view.
		onRender(params) {
			params.component.listenTo(params.component, 'remove', this.onRemove.bind(this))

			const reactElement = React.createElement(Component, {
				ref: this.containerRef,
				onChange: this.onChange.bind(this),
			})

			if (!this.root) {
				this.root = ReactDOM.createRoot(this.container)
			}

			this.root.render(<React.StrictMode>{reactElement}</React.StrictMode>)
		},
	} as TraitView)
}
