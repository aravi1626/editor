import { buildComponentBlock } from './buildComponentBlock'
import * as Components from './components'

export function buildComponentsBlocks(editor: any) {
	const category = 'Components'

	for (const component of Object.keys(Components)) {
		buildComponentBlock(editor, category, Components[component])
	}
}
