import grapesjs from 'grapesjs'
import Component = grapesjs.Component

export type ComponentBlockProps<T extends object> = T & {
	model: Component
	className: string
	id: string
	isEditorMode?: boolean
}
