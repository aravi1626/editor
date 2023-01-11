import { loadBaseReactComponentType } from './components/baseReactComponent'
import { buildComponentsBlocks } from './components'
import { buildBasicBlocks } from './basic'
import { buildPresetBlocks } from './presets'
import { buildBuiltInBlocks } from './pages'

export function loadBlocks(editor: any) {
	buildBasicBlocks(editor)
	buildPresetBlocks(editor)
	buildBuiltInBlocks(editor)

	loadBaseReactComponentType(editor)
	buildComponentsBlocks(editor)
}
