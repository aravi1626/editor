import { buildCollectionPage } from './collectionPage'
import { buildBrandPage } from './brandPage'
import { buildNFTPage } from './nftPage'

export function buildBuiltInBlocks(editor: any) {
	const category = 'Pages'

	buildBrandPage(editor, category)
	buildCollectionPage(editor, category)
	buildNFTPage(editor, category)
}
