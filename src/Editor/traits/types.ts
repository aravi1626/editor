import { ChangeEventHandler, ComponentType } from 'react'
import grapesjs from 'grapesjs'
import Component = grapesjs.Component
import Editor = grapesjs.Editor

type Trait = grapesjs.Trait & { id: string }

export type EditorInstance = Editor

export type UpdateParam = {
	component: Component
	trait: Trait
	elInput: HTMLElement
}

export type EventParam = {
	component: Component
	trait: Trait & { id: string }
	elInput: HTMLElement
}

export type ComponentWithTraitProps<P = object> = P & {
	onChange(event: ChangeEventHandler<HTMLInputElement>)
}

export type TraitView = grapesjs.TraitView & Record<string, any>

export type ComponentWithTrait<P = any> = ComponentType<P> & {
	editor?: {
		traitType: string
	}
}
