export function buildOptionsPanel(editor: any) {
	const panelName = 'options'
	const optionsPanel = editor.Panels.getPanel(panelName)

	const options = [
		{
			id: 'export',
			command: 'export-template',
			attributes: { title: 'Export' },
			label: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="m23 11v7.2a2.91 2.91 0 0 1 -3 2.8h-16a2.91 2.91 0 0 1 -3-2.8v-7.2a1 1 0 0 1 2 0v7.2a.93.93 0 0 0 1 .8h16a.93.93 0 0 0 1-.8v-7.2a1 1 0 0 1 2 0zm-13.41-3.17 1.41-1.42v8.59a1 1 0 0 0 2 0v-8.59l1.41 1.42a1 1 0 0 0 1.42 0 1 1 0 0 0 .29-.71 1 1 0 0 0 -.29-.71l-3.12-3.12a1 1 0 0 0 -.64-.29h-.19a1 1 0 0 0 -.54.24h-.05l-3.12 3.17a1 1 0 1 0 1.42 1.42z" fill="rgb(0,0,0)"/></g></svg>`,
		},
		{
			id: 'undo',
			command: 'core:undo',
			attributes: { title: 'Undo (Ctrl + Z)' },
			label: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40.5 40.5"><g><path d="M40.5,20.25c0,9.374-7.625,17-17,17c-1.656,0-3-1.343-3-3s1.344-3,3-3c6.064,0,11-4.936,11-11c0-6.065-4.936-11-11-11c-5.756,0-10.486,4.447-10.953,10.086l1.832-1.832c1.171-1.172,3.071-1.172,4.242,0c1.172,1.171,1.172,3.071,0,4.242l-6.75,6.75c-0.563,0.562-1.326,0.879-2.121,0.879c-0.796,0-1.559-0.316-2.121-0.879l-6.75-6.75c-1.172-1.172-1.172-3.071,0-4.242c1.172-1.172,3.071-1.172,4.243,0l1.444,1.444c0.669-8.766,8-15.698,16.934-15.698C32.875,3.25,40.5,10.876,40.5,20.25z"/></g></svg>`,
		},
		{
			id: 'redo',
			command: 'core:redo',
			attributes: { title: 'Redo (Shift + Ctrl + Z)' },
			label: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40.499 40.5"><g><path d="M39.622,21.746l-6.749,6.75c-0.562,0.562-1.326,0.879-2.122,0.879s-1.56-0.316-2.121-0.879l-6.75-6.75c-1.171-1.171-1.171-3.071,0-4.242c1.171-1.172,3.071-1.172,4.242,0l1.832,1.832C27.486,13.697,22.758,9.25,17,9.25c-6.064,0-11,4.935-11,11c0,6.064,4.936,11,11,11c1.657,0,3,1.343,3,3s-1.343,3-3,3c-9.373,0-17-7.626-17-17s7.627-17,17-17c8.936,0,16.266,6.933,16.936,15.698l1.442-1.444c1.172-1.172,3.072-1.172,4.242,0C40.792,18.674,40.792,20.574,39.622,21.746z"/></g></svg>`,
		},
	]

	// Remove unnecessary options
	optionsPanel.get('buttons').remove('fullscreen')
	optionsPanel.get('buttons').remove('export-template')
	optionsPanel.get('buttons').remove('preview')
	// Remove existing options before adding to recycle the view.
	optionsPanel.get('buttons').remove(options.map((option) => option.id))
	optionsPanel.get('buttons').add(options)
}
