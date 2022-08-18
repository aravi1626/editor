export function buildBasicBlocks(editor: any) {
	const category = 'Basic'
	const basicBlocksManager = editor.Blocks

	const blocks: any = [
		{
			id: 'text',
			label: 'Text',
			category,
			media: `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
<path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
</svg>`,
			activate: true,
			content: `<p class="font-primary m-0">Insert your text here</p>`,
		},
		{
			id: 'link',
			label: 'Link',
			category,
			media: `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
<path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
</svg>`,
			activate: true,
			content: {
				type: 'link',
				content: 'Insert your link here',
				style: { color: '#0e7dfb' },
				attributes: {
					class: ['font-primary'],
				},
			},
		},
		{
			id: 'image',
			label: 'Image',
			category,
			media: `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
<path fill="currentColor" d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
</svg>`,
			activate: true,
			content: { type: 'image' },
		},
		{
			id: 'video',
			label: 'Video',
			category,
			media: `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
<path fill="currentColor" d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
</svg>`,
			activate: true,
			content: { type: 'video', src: '', autoplay: true, loop: true },
		},
		{
			id: 'single-column-container',
			label: 'Single Column Container',
			category,
			media: `<svg width="48" height="48" viewBox="0 0 67.733 67.733" xmlns="http://www.w3.org/2000/svg">
<rect x="5.0655" y="6.3461" width="57.602" height="55.041" fill-opacity="0" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
</svg>`,
			activate: true,
			content: `<div class="w-full max-w-screen-desktop container mx-auto "><div class="w-full cell"></div></div>`,
		},
		{
			id: 'two-column-container',
			label: 'Two Columns Container',
			category,
			media: `<svg width="48" height="48" viewBox="0 0 67.733 67.733" xmlns="http://www.w3.org/2000/svg">
			<g fill-opacity="0" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
			<rect transform="scale(1,-1)" x="4.8301" y="-61.352" width="27.755" height="55.041"/>
			<rect transform="scale(1,-1)" x="35.149" y="-61.423" width="27.755" height="55.041"/>
			</g>
			</svg>`,
			activate: true,
			content: `
				<div class="w-full max-w-screen-desktop container mx-auto flex flex-col tablet:flex-row py-px-16">
					<div class="w-full tablet:w-6/12 cell"></div>
					<div class="w-full tablet:w-6/12 cell"></div>
				</div>
			`,
		},
		{
			id: 'two-column-high-container',
			label: 'Two Columns 70% Container',
			category,
			media: `<svg width="48" height="48" viewBox="0 0 67.733 67.733" xmlns="http://www.w3.org/2000/svg">
<g fill-opacity="0" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
<rect transform="scale(1,-1)" x="4.8301" y="-61.352" width="32.732" height="55.041"/>
<rect transform="scale(1,-1)" x="41.378" y="-61.423" width="21.525" height="55.041"/>
</g>
</svg>
`,
			activate: true,
			content: `
				<div class="w-full max-w-screen-desktop container mx-auto flex flex-col tablet:flex-row py-px-16">
					<div class="w-full tablet:w-8/12 cell"></div>
					<div class="w-full tablet:w-4/12 cell"></div>
				</div>
			`,
		},
		{
			id: 'three-container',
			label: 'Two Columns 30% Container',
			category,
			media: `<svg width="48" height="48" viewBox="0 0 67.733 67.733" xmlns="http://www.w3.org/2000/svg">
<g fill-opacity="0" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
<rect transform="scale(1,-1)" x="30.098" y="-61.352" width="32.732" height="55.041"/>
<rect transform="scale(1,-1)" x="4.9038" y="-61.423" width="21.525" height="55.041"/>
</g>
</svg>`,
			activate: true,
			content: `
				<div class="w-full max-w-screen-desktop container mx-auto flex flex-col tablet:flex-row py-px-16">
					<div class="w-full tablet:w-4/12 cell"></div>
					<div class="w-full tablet:w-8/12 cell"></div>
				</div>
			`,
		},
		{
			id: 'two-column-low-container',
			label: 'Three Columns Container',
			category,
			media: `<svg width="48" height="48" viewBox="0 0 67.733 67.733" xmlns="http://www.w3.org/2000/svg"><g fill-opacity="0" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect transform="scale(1,-1)" x="1.5788" y="-61.423" width="21.525" height="55.041"/><rect transform="scale(1,-1)" x="23.104" y="-61.423" width="21.525" height="55.041"/><rect transform="scale(1,-1)" x="44.629" y="-61.423" width="21.525" height="55.041"/></g></svg>`,
			activate: true,
			content: `
				<div class="w-full max-w-screen-desktop container mx-auto flex flex-col tablet:flex-row py-px-16">
					<div class="w-full tablet:w-4/12 cell"></div>
					<div class="w-full tablet:w-4/12 cell"></div>
					<div class="w-full tablet:w-4/12 cell"></div>
				</div>
			`,
		},
	]

	blocks.forEach(({ id, ...block }) =>
		basicBlocksManager.add(id, {
			label: block.label,
			attributes: { class: block.class ?? [] },
			content: block.content,
			category: {
				label: block.category,
				open: true,
			},
			media: block.media,
		})
	)
}
