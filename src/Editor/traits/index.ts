import * as Components from './components'
import { buildComponentTrait } from './buildComponentTrait'

export function loadCustomTraits(editor: any) {
	for (const [_, component] of Object.entries(Components)) {
		buildComponentTrait(editor, component)
	}
}
