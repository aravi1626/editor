import { buildTwoImageColumnBlock } from './twoImageColumn'
import { buildHeadingBlock } from './heading'
import { buildSectionHeadingTextImagesBlock } from './sectionHeadingTextImages'

export function buildPresetBlocks(editor: any) {
	const category = 'Presets'

	buildTwoImageColumnBlock(editor, category)
	buildHeadingBlock(editor, category)
	buildSectionHeadingTextImagesBlock(editor, category)
}
