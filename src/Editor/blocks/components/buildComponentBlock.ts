export function buildComponentBlock(editor: any, category: string, Component: any) {
	const componentEditorProps = {
		name: Component?.editor.name ?? 'unknown',
		classes: Component?.editor?.classes ?? [],
		style: Component?.editor?.style ?? {},
		attributes: Component?.editor?.attributes ?? {},
		traits: Component?.editor?.traits ?? [],
	}

	editor.Components.addType(componentEditorProps.name, {
		extend: 'react-component',
		model: {
			defaults: {
				component: Component,
				stylable: true,
				resizable: true,
				editable: true,
				draggable: true,
				droppable: true,
				attributes: componentEditorProps.attributes,
				traits: componentEditorProps.traits,
			},
		},
		isComponent: (el) => el.tagName === componentEditorProps.name.toUpperCase(),
	})

	editor.BlockManager.add(componentEditorProps.name, {
		label: `<div class='gjs-fonts gjs-f-b1'>${componentEditorProps.name}</div>`,
		category: category,
		content: {
			type: componentEditorProps.name,
			classes: componentEditorProps.classes,
			style: componentEditorProps.style,
		},
	})
}
