export function buildCommandsPanel(editor: any) {
	editor.Commands.add('set-device-desktop', (e) => e.setDevice('Desktop'))
	editor.Commands.add('set-device-tablet', (e) => e.setDevice('Tablet'))
	editor.Commands.add('set-device-mobile', (e) => e.setDevice('Mobile portrait'))

	const panelName = 'commands'
	const commandsPanel = editor.Panels.getPanel(panelName)

	const options = [
		{
			id: 'deviceMobile',
			command: 'set-device-mobile',
			attributes: { title: 'View layout in Mobile' },
			label: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 35"><path d="M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625H8.979V3.749h17.042V30.625z"/></svg>`,
		},
		{
			id: 'deviceTablet',
			command: 'set-device-tablet',
			attributes: { title: 'View layout in Tablet' },
			label: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 33.994 33.994"><g><path d="M27.125,0H6.867C5.59,0,4.562,1.033,4.562,2.309v29.377c0,1.272,1.028,2.308,2.305,2.308h20.258c1.273,0,2.306-1.035,2.306-2.308V2.309C29.433,1.033,28.399,0,27.125,0z M16.997,33.129c-0.758,0-1.371-0.613-1.371-1.37c0-0.758,0.613-1.372,1.371-1.372c0.756,0,1.371,0.614,1.371,1.372C18.368,32.516,17.753,33.129,16.997,33.129z M27.098,29.186H6.896V2.774h20.202V29.186z"/></g></svg>`,
		},
		{
			id: 'deviceDesktop',
			command: 'set-device-desktop',
			attributes: { title: 'View layout in Desktop' },
			label: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m1.25 6c0-1.51878 1.23122-2.75 2.75-2.75h16c1.5188 0 2.75 1.23122 2.75 2.75v10c0 1.5188-1.2312 2.75-2.75 2.75h-5.7865l.75 1.5h2.0365c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-10c-.41421 0-.75-.3358-.75-.75s.33579-.75.75-.75h2.03647l.75-1.5h-5.78647c-1.51878 0-2.75-1.2312-2.75-2.75zm18.75 11.25h-16c-.69036 0-1.25-.5596-1.25-1.25v-10c0-.69036.55964-1.25 1.25-1.25h16c.6904 0 1.25.55964 1.25 1.25v10c0 .6904-.5596 1.25-1.25 1.25z" fill="rgb(0,0,0)" fill-rule="evenodd"/></svg>`,
		},
	]

	// Remove existing options before adding to recycle the view.
	commandsPanel.get('buttons').remove(options.map((option) => option.id))
	commandsPanel.get('buttons').add(options)
}
