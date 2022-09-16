export function buildHorizontalBannerBlock(editor: any, category: string) {
	const basicBlocksManager = editor.Blocks

	const block = {
		id: 'horizontal-banner',
		label: 'Horizontal Banner 720x90',
		category,
		media: `<svg width="100%" height="72" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 128 72" style="enable-background:new 0 0 128 72;" xml:space="preserve"><rect y="36" height="24" width="100%" fill="#242424"/></svg>`,
		content: {
			type: 'image',
			classes: ['w-full', 'h-auto', 'object-cover'],
			attributes: {
				style: 'width:100%;aspect-ratio:728/90;background-color:#ccc',
				src: 'https://picsum.photos/728/90',
			},
		},
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
