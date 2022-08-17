import packageJSON from '../../../package.json'

export function buildStatePanel(editor: any) {
	const panelName = 'state'
	const options = [
		{
			id: 'version',
			label: `<div>V${packageJSON.version}</div>`,
			active: false,
		},
		{
			id: 'save',
			command: 'save',
			attributes: { title: 'Save (⌘+shift+s or ctrl+shift+s)' },
			label: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"><path d="M30.71,7.29l-6-6A1,1,0,0,0,24,1H4A3,3,0,0,0,1,4V28a3,3,0,0,0,3,3H28a3,3,0,0,0,3-3V8A1,1,0,0,0,30.71,7.29ZM20,3V9H12V3ZM8,29V22a1,1,0,0,1,1-1H23a1,1,0,0,1,1,1v7Zm21-1a1,1,0,0,1-1,1H26V22a3,3,0,0,0-3-3H9a3,3,0,0,0-3,3v7H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3h6V9a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V3h1.59L29,8.41Z"/></svg>`,
			active: false,
		},
	]

	editor.Panels.addPanel({
		id: panelName,
		visible: true,
		buttons: options,
	})

	editor.Commands.add('save', {
		run(editor: any) {
			return editor
		},
	})

	editor.Keymaps.add('ns:save-keymap', '⌘+shift+s, ctrl+shift+s', 'save')
}
