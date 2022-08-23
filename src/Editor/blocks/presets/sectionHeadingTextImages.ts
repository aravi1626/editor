export function buildSectionHeadingTextImagesBlock(editor: any, category: string) {
	const basicBlocksManager = editor.Blocks

	const block = {
		id: 'section-heading-text-images',
		label: 'Section Heading Text Images',
		category,
		media: `<svg width="100%" height="72" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 72" style="enable-background:new 0 0 128 72;" xml:space="preserve"><style type="text/css">.st0{fill:#414042;}.st1{fill:#58595B;}</style><path d="M104.18,10.56H21.55c-1.69,0-3.07-1.37-3.07-3.07v0c0-1.69,1.37-3.07,3.07-3.07h82.63c1.69,0,3.07,1.37,3.07,3.07v0C107.24,9.19,105.87,10.56,104.18,10.56z"/><path class="st0" d="M105.71,18.08H20.01c-0.85,0-1.53-0.69-1.53-1.53v0c0-0.85,0.69-1.53,1.53-1.53h85.69c0.85,0,1.53,0.69,1.53,1.53v0C107.24,17.39,106.55,18.08,105.71,18.08z"/><g><path class="st1" d="M45.55,42.93H33.18c-2.13,0-3.86-1.73-3.86-3.86V26.71c0-2.13,1.73-3.86,3.86-3.86h12.36c2.13,0,3.86,1.73,3.86,3.86v12.36C49.4,41.2,47.68,42.93,45.55,42.93z"/><path class="st1" d="M94.87,42.93H82.4c-2.1,0-3.8-1.7-3.8-3.8V26.65c0-2.1,1.7-3.8,3.8-3.8h12.47c2.1,0,3.8,1.7,3.8,3.8v12.47C98.67,41.23,96.97,42.93,94.87,42.93z"/><path class="st1" d="M45.55,67.63H33.18c-2.13,0-3.86-1.73-3.86-3.86V51.41c0-2.13,1.73-3.86,3.86-3.86h12.36c2.13,0,3.86,1.73,3.86,3.86v12.36C49.4,65.9,47.68,67.63,45.55,67.63z"/><path class="st1" d="M94.87,67.63H82.4c-2.1,0-3.8-1.7-3.8-3.8V51.35c0-2.1,1.7-3.8,3.8-3.8h12.47c2.1,0,3.8,1.7,3.8,3.8v12.47C98.67,65.93,96.97,67.63,94.87,67.63z"/></g></svg>`,
		activate: true,
		content: JSON.parse(
			`[{"classes":["w-full","max-w-screen-desktop","container","mx-auto"],"_undoexc":["status","open"],"components":[{"type":"text","classes":["m-0","text-center","text-px-32","tablet:text-px-48","font-secondary"],"attributes":{"id":"il4a1"},"_undoexc":["status","open"],"components":[{"type":"textnode","content":"Heading","_undoexc":["status","open"]}]},{"classes":["w-full","cell"],"_undoexc":["status","open"],"components":[{"tagName":"p","type":"text","classes":["font-primary","m-0","text-center","py-px-16"],"attributes":{"id":"icroh"},"_undoexc":["status","open"],"components":[{"type":"textnode","content":"Insert your text here","_undoexc":["status","open"]}]}]}]},{"classes":["w-full","max-w-screen-desktop","container","mx-auto","flex","flex-col","tablet:flex-row","py-px-16","gap-px-40"],"attributes":{"id":"iccg"},"_undoexc":["status","open"],"components":[{"classes":["w-full","tablet:w-6/12","cell"],"_undoexc":["status","open"],"components":[{"type":"image","resizable":{"ratioDefault":1},"classes":["w-full","h-auto","aspect-square","object-cover"],"attributes":{"id":"ixrk","style":{"width":"100%","height":"auto"}},"_undoexc":["status","open"]}]},{"classes":["w-full","tablet:w-6/12","cell"],"_undoexc":["status","open"],"components":[{"type":"image","resizable":{"ratioDefault":1},"classes":["w-full","h-auto","aspect-square","object-cover"],"attributes":{"id":"i97v","style":{"width":"100%","height":"auto"}},"_undoexc":["status","open"]}]}]},{"classes":["w-full","max-w-screen-desktop","container","mx-auto","flex","flex-col","tablet:flex-row","py-px-16","gap-px-40"],"attributes":{"id":"iccg-2"},"_undoexc":["status","open"],"components":[{"classes":["w-full","tablet:w-6/12","cell"],"_undoexc":["status","open"],"components":[{"type":"image","resizable":{"ratioDefault":1},"classes":["w-full","h-auto","aspect-square","object-cover"],"attributes":{"id":"ixrk-2","style":{"width":"100%","height":"auto"}},"_undoexc":["status","open"]}]},{"classes":["w-full","tablet:w-6/12","cell"],"_undoexc":["status","open"],"components":[{"type":"image","resizable":{"ratioDefault":1},"classes":["w-full","h-auto","aspect-square","object-cover"],"attributes":{"id":"i97v-2","style":{"width":"100%","height":"auto"}},"_undoexc":["status","open"]}]}]}]`
		),
	}

	basicBlocksManager.add(block.id, {
		label: block.label,
		attributes: { muted: true },
		content: block.content,
		category: {
			label: block.category,
			open: true,
		},
		media: block.media,
	})
}
