import { buildBasicBlocks } from './basic'
import { buildComponentsBlocks } from './components'
import { buildPresetBlocks } from './presets'

export function loadBlocks(editor: any) {
	buildBasicBlocks(editor)
	buildComponentsBlocks(editor)
	buildPresetBlocks(editor)
}
