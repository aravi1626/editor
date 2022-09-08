import { buildBasicBlocks } from './basic'
import { buildComponentsBlocks } from './components'
import { buildPresetBlocks } from './presets'
import { buildBuiltInBlocks } from './built-in'

export function loadBlocks(editor: any) {
	buildBasicBlocks(editor)
	buildComponentsBlocks(editor)
	buildPresetBlocks(editor)
	buildBuiltInBlocks(editor)
}
