import { buildBasicBlocks } from './basic'
import { buildComponentsBlocks } from './components'

export function loadBlocks(editor: any) {
	buildBasicBlocks(editor)
	buildComponentsBlocks(editor)
}
