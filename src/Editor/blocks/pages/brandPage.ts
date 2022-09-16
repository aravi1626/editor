export function buildBrandPage(editor: any, category: string) {
	const basicBlocksManager = editor.Blocks
	const label = 'Brand Page'
	const block = {
		id: 'brand-page',
		category,
		label,
		media: `<svg width="100%" height="72" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 128 72" style="enable-background:new 0 0 128 72;" xml:space="preserve"><style type="text/css">.st0{font-family:'MyriadPro-Regular';}.st1{font-size:25.4036px;}</style><text transform="matrix(1 0 0 1 34 43.9775)" class="st0 st1">PAGE</text></svg>`,
		activate: true,
		content: [
			{
				classes: ['w-full', 'max-w-screen-desktop', 'container', 'mx-auto', 'mb-px-46'],
				components: [
					{
						classes: ['w-full', 'cell'],
						components: [
							{
								type: 'text',
								classes: ['m-0', 'text-px-32', 'tablet:text-px-48', 'font-primary', 'mb-px-26'],
								components: [{ type: 'textnode', content: 'About this Brand' }],
							},
						],
					},
				],
			},
			{
				classes: ['w-full', 'max-w-screen-desktop', 'container', 'mx-auto', 'mb-px-46'],
				attributes: { id: 'isko' },
				_undoexc: ['status', 'open'],
				components: [
					{
						classes: ['w-full', 'cell'],
						_undoexc: ['status', 'open'],
						components: [
							{
								tagName: 'p',
								type: 'text',
								classes: ['font-secondary', 'm-0', 'text-center', 'py-px-16'],
								attributes: { id: 'icroh' },
								_undoexc: ['status', 'open'],
								components: [
									{
										type: 'textnode',
										content:
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sollicitudin enim. Duis vehicula a risus sit amet elementum. Pellentesque sed aliquet sem. Integer nibh nulla, volutpat nec congue nec, consequat eu felis. Morbi pretium mollis dui, vel fermentum leo rutrum sit amet. Praesent blandit id tortor eget sagittis. In elementum nunc ut eros faucibus, at sagittis lorem convallis. Curabitur cursus nec lorem vitae accumsan. Morbi sagittis rutrum turpis, id fermentum erat lobortis vel. Proin et luctus nulla. Morbi rutrum neque lectus, at gravida enim egestas eget. Quisque venenatis dolor id metus pellentesque condimentum. Nullam laoreet ligula sit amet nisl maximus volutpat.',
										_undoexc: ['status', 'open'],
									},
									{ tagName: 'br', void: true, _undoexc: ['status', 'open'] },
								],
							},
						],
					},
				],
			},
			{
				classes: ['w-full', 'max-w-screen-desktop', 'container', 'mx-auto'],
				_undoexc: ['status', 'open'],
				components: [
					{
						classes: ['w-full', 'cell'],
						_undoexc: ['status', 'open'],
						components: [
							{
								type: 'video',
								classes: ['w-full', 'aspect-video'],
								attributes: { allowfullscreen: 'allowfullscreen', muted: true },
								src: '',
								loop: true,
								muted: true,
								autoplay: true,
							},
						],
					},
				],
			},
			{
				classes: ['w-full', 'max-w-screen-desktop', 'container', 'mx-auto', 'my-px-46'],
				attributes: { id: 'i6x0x' },
				_undoexc: ['status', 'open'],
				components: [
					{
						classes: ['w-full', 'cell'],
						_undoexc: ['status', 'open'],
						components: [
							{
								tagName: 'p',
								type: 'text',
								classes: ['font-secondary', 'm-0', 'text-center', 'py-px-16'],
								attributes: { id: 'i1f3h' },
								_undoexc: ['status', 'open'],
								components: [
									{
										type: 'textnode',
										content:
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sollicitudin enim. Duis vehicula a risus sit amet elementum. Pellentesque sed aliquet sem. Integer nibh nulla, volutpat nec congue nec, consequat eu felis. Morbi pretium mollis dui, vel fermentum leo rutrum sit amet. Praesent blandit id tortor eget sagittis. In elementum nunc ut eros faucibus, at sagittis lorem convallis. Curabitur cursus nec lorem vitae accumsan. Morbi sagittis rutrum turpis, id fermentum erat lobortis vel. Proin et luctus nulla. Morbi rutrum neque lectus, at gravida enim egestas eget. Quisque venenatis dolor id metus pellentesque condimentum. Nullam laoreet ligula sit amet nisl maximus volutpat.',
										_undoexc: ['status', 'open'],
									},
									{ tagName: 'br', void: true, _undoexc: ['status', 'open'] },
								],
							},
						],
					},
				],
			},
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
								attributes: { id: 'i97v', style: { width: '100%', height: 'auto' } },
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
				attributes: { id: 'iccg-2' },
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
								attributes: { id: 'i97v', style: { width: '100%', height: 'auto' } },
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
			{
				classes: ['w-full', 'max-w-screen-desktop', 'container', 'mx-auto', 'my-px-46'],
				attributes: { id: 'ix26b' },
				_undoexc: ['status', 'open'],
				components: [
					{
						classes: ['w-full', 'cell'],
						_undoexc: ['status', 'open'],
						components: [
							{
								tagName: 'p',
								type: 'text',
								classes: ['font-secondary', 'm-0', 'text-center', 'py-px-16'],
								attributes: { id: 'i2h7g' },
								_undoexc: ['status', 'open'],
								components: [
									{
										type: 'textnode',
										content:
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sollicitudin enim. Duis vehicula a risus sit amet elementum. Pellentesque sed aliquet sem. Integer nibh nulla, volutpat nec congue nec, consequat eu felis. Morbi pretium mollis dui, vel fermentum leo rutrum sit amet. Praesent blandit id tortor eget sagittis. In elementum nunc ut eros faucibus, at sagittis lorem convallis. Curabitur cursus nec lorem vitae accumsan. Morbi sagittis rutrum turpis, id fermentum erat lobortis vel. Proin et luctus nulla. Morbi rutrum neque lectus, at gravida enim egestas eget. Quisque venenatis dolor id metus pellentesque condimentum. Nullam laoreet ligula sit amet nisl maximus volutpat.',
										_undoexc: ['status', 'open'],
									},
									{ tagName: 'br', void: true, _undoexc: ['status', 'open'] },
								],
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
