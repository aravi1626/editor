export function buildHeadingBlock(editor: any, category: string) {
	const basicBlocksManager = editor.Blocks

	const block = {
		id: 'heading',
		label: 'Heading',
		category,
		media: `<svg width="100%" height="72" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 128 72" style="enable-background:new 0 0 128 72;" xml:space="preserve"><style type="text/css">.st0{font-family:'MyriadPro-Regular';}.st1{font-size:25.4036px;}</style><text transform="matrix(1 0 0 1 13.5239 43.9775)" class="st0 st1">HEADING</text></svg>`,
		content: [
			{
				type: 'text',
				classes: ['m-0', 'text-center', 'text-px-32', 'tablet:text-px-48', 'font-secondary'],
				components: [{ type: 'textnode', content: 'Heading' }],
			},
		],
	}

	basicBlocksManager.add(block.id, {
		label: block.label,
		attributes: { muted: true },
		content: block.content,
		category: {
			label: block.category,
			open: false,
		},
		media: block.media,
	})
}
