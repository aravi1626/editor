export function buildTwoImageColumnBlock(editor: any, category: string) {
	const basicBlocksManager = editor.Blocks

	const block = {
		id: 'two-image-column-container',
		label: 'Two Images Columns',
		category,
		media: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="72" viewBox="0 0 128 72" style="enable-background:new 0 0 128 72;" xml:space="preserve"><style type="text/css">.st0{fill:#CCCCCB;}</style><g><path class="st0" d="M57.1,61.46H15.06c-2.66,0-4.82-2.16-4.82-4.82V14.6c0-2.66,2.16-4.82,4.82-4.82H57.1c2.66,0,4.82,2.16,4.82,4.82v42.04C61.92,59.3,59.76,61.46,57.1,61.46z"/><path class="st0" d="M112.94,62.22H70.9c-2.66,0-4.82-2.16-4.82-4.82V15.36c0-2.66,2.16-4.82,4.82-4.82h42.04c2.66,0,4.82,2.16,4.82,4.82V57.4C117.76,60.07,115.6,62.22,112.94,62.22z"/></g></svg>`,
		content: [
			{
				classes: [
					'w-full',
					'max-w-screen-desktop',
					'container',
					'mx-auto',
					'flex',
					'flex-col',
					'tablet:flex-row',
					'py-px-16',
					'gap-px-40',
				],
				attributes: { id: 'iccg' },
				_undoexc: ['status', 'open'],
				components: [
					{
						classes: ['w-full', 'tablet:w-6/12', 'cell'],
						_undoexc: ['status', 'open'],
						components: [
							{
								type: 'image',
								resizable: { ratioDefault: 1 },
								classes: ['w-full', 'h-auto', 'aspect-square', 'object-cover'],
								attributes: { id: 'ixrk', style: { width: '100%', height: 'auto' } },
								_undoexc: ['status', 'open'],
							},
						],
					},
					{
						classes: ['w-full', 'tablet:w-6/12', 'cell'],
						_undoexc: ['status', 'open'],
						components: [
							{
								type: 'image',
								resizable: { ratioDefault: 1 },
								classes: ['w-full', 'h-auto', 'aspect-square', 'object-cover'],
								attributes: { id: 'i97v', style: { width: '100%', height: 'auto' } },
								_undoexc: ['status', 'open'],
							},
						],
					},
				],
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
