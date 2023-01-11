export function buildComponentBlock(editor: any, category: string, Component: any) {
	const componentType = Component.name
	const componentEditorProps = {
		classes: Component?.editor?.classes ?? [],
		style: Component?.editor?.style ?? {},
		attributes: Component?.editor?.attributes ?? {},
		traits: Component?.editor?.traits ?? [],
	}

	editor.Components.addType(componentType, {
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
		isComponent: (el) => el.tagName === componentType.toUpperCase(),
	})

	editor.BlockManager.add(componentType, {
		label: `<div class='gjs-fonts gjs-f-b1'>${componentType}</div>`,
		category: category,
		content: {
			type: componentType,
			classes: componentEditorProps.classes,
			style: componentEditorProps.style,
		},
	})
}
