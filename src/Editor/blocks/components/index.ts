export function buildComponentsBlocks(editor: any) {
	const category = 'Components'
	const basicBlocksManager = editor.Blocks

	const blocks: any = [
		{
			id: 'component',
			label: 'Component',
			category,
			media: `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
<path fill="currentColor" d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
</svg>`,
			activate: false,
			content: { type: 'component-with-js' },
		},
	]

	editor.Components.addType('component-with-js', {
		model: {
			defaults: {
				script: function () {
					// It will execute immediately on render
				},
				style: {
					width: '100px',
					height: '100px',
					background: 'red',
				},
			},
		},
	})

	blocks.forEach(({ id, ...block }) =>
		basicBlocksManager.add(id, {
			label: block.label,
			attributes: { class: block.class ?? '' },
			content: block.content,
			category: {
				label: block.category,
				open: false,
			},
			media: block.media,
		})
	)
}
