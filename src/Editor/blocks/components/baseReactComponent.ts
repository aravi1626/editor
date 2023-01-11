// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import ReactDOM from 'react-dom/client'
import React from 'react'

export function loadBaseReactComponentType(editor) {
	const domComponents = editor.DomComponents
	const componentType = domComponents.getType('default')
	const componentModel = componentType.model
	const wrapChild = 'data-child'

	domComponents.addType('react-component', {
		model: {
			toHTML(opts = {}) {
				return componentModel.prototype.toHTML.call(this, {
					...opts,
					tag: this.get('type'),
				})
			},
		},
		view: {
			tagName: 'div',

			init() {
				const { model } = this
				this.listenTo(model, 'change:attributes', this.render)
				this.listenTo(model, 'component:update:classes', this.render)
				this.listenTo(model.components(), 'add remove reset', this.__upRender)
			},

			removed() {
				this.unmountReact()
			},

			getChildrenContainer() {
				const { childrenContainer } = this
				if (childrenContainer) return childrenContainer

				this.childrenContainer = document.createElement('child-component')

				return this.childrenContainer
			},

			createReactEl(component, props) {
				const container = React.createElement('span', { [wrapChild]: true })
				return React.createElement(component, props, container)
			},

			mountReact(component, container) {
				if (!this.root) {
					this.root = ReactDOM.createRoot(container)
				}
				this.root.render(component)
			},

			unmountReact() {
				this.root.unmount()
			},

			render() {
				const { model, el } = this
				this.updateAttributes()
				this.renderChildren()
				const reactEl = this.createReactEl(model.get('component'), {
					...model.get('attributes'),
				})
				this.mountReact(reactEl, el)
				const child = el.querySelector(`span[${wrapChild}]`)

				// If the container is found, the React component is able to render children
				if (child) {
					const childrenContainer = this.getChildrenContainer()
					while (childrenContainer.firstChild) {
						child.appendChild(childrenContainer.firstChild)
					}
				}

				return this
			},

			__upRender() {
				clearTimeout(this._upRenderTimeout)
				this._upRenderTimeout = setTimeout(() => this.render())
			},
		},
	})
}
