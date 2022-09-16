import { buildTwoImageColumnBlock } from './twoImageColumn'
import { buildHeadingBlock } from './heading'
import { buildSectionHeadingTextImagesBlock } from './sectionHeadingTextImages'
import { buildHorizontalBannerBlock } from './horizontalBanner'
import { buildHorizontalBannerLgBlock } from './horizontalBannerLg'

export function buildPresetBlocks(editor: any) {
	const category = 'Presets'

	buildTwoImageColumnBlock(editor, category)
	buildHeadingBlock(editor, category)
	buildSectionHeadingTextImagesBlock(editor, category)
	buildHorizontalBannerBlock(editor, category)
	buildHorizontalBannerLgBlock(editor, category)
}
