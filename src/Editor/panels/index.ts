import { buildCommandsPanel } from './commands'
import { buildOptionsPanel } from './options'
import { buildStatePanel } from './state'

export function loadPanels(editor: any) {
	buildCommandsPanel(editor)
	buildOptionsPanel(editor)
	buildStatePanel(editor)
}
