export function buildVideoBlock(editor: any, category: string) {
	const domComponents = editor.DomComponents

	domComponents.addType('video', {
		extendFn: ['updateTraits'],
		view: {
			init() {
				;(this as any).listenTo((this as any).model, 'active', this.openAssetManager)

				// The setTimeout is used here to activate the muted video, because without , the object comes as undefined because the component has not yet been mounted
				setTimeout(() => {
					;(this as any).videoEl.muted = true
					;(this as any).videoEl.setAttribute('playsinline', '')
				}, 500)
			},

			events: {
				dblclick: function () {
					;(this as any).openAssetManager()
				},
			},
			openAssetManager() {
				;(this as any).opts.config.em.get('Editor').runCommand('core:open-assets', {
					target: (this as any).model,
					types: ['video'],
					accept: 'video/*',
					modalTitle: 'Select file',
				})
			},
		},
		model: {
			init() {
				this.addMutedTrait()
				;(this as any).listenTo(this, 'change:attributes:muted', this.handleMutedPropChange)
			},

			updateTraits() {
				this.addMutedTrait()
			},

			addMutedTrait() {
				const videoComponent: any = this as any
				if (videoComponent.getTrait('muted')) return

				videoComponent.addTrait({
					type: 'checkbox',
					name: 'muted',
					value: videoComponent.attributes.muted,
				})
			},

			handleMutedPropChange(_, val) {
				;(this as any).view.opts.model.set('muted', val)

				const element = (this as any).view.videoEl

				element.muted = val

				val ? element.setAttribute('muted', '') : element.removeAttribute('muted')
			},
		},
	})

	return {
		id: 'video',
		label: 'Video',
		category,
		media: `<svg width="48" height="48" viewBox="0 -42 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m497 0h-482c-8.285156 0-15 6.714844-15 15v397.445312c0 8.285157 6.714844 15 15 15h482c8.285156 0 15-6.714843 15-15v-397.445312c0-8.285156-6.714844-15-15-15zm-304.457031 264.078125v-100.710937c0-7.203126 4.109375-13.769532 10.722656-17.136719 6.71875-3.417969 14.894531-2.960938 21.113281 1.109375l85.828125 50.101562c.4375.253906.859375.53125 1.269531.828125 5.074219 3.695313 7.984376 9.328125 7.984376 15.453125s-2.910157 11.757813-7.984376 15.453125c-.410156.296875-.832031.574219-1.269531.828125l-85.828125 50.101563c-3.4375 2.246093-7.464844 3.390625-11.519531 3.390625-3.285156 0-6.585937-.753906-9.59375-2.285156-6.617187-3.363282-10.722656-9.929688-10.722656-17.132813zm159.6875-207.960937v-26.117188h50.332031v26.117188zm-30 0h-50.335938v-26.117188h50.335938zm-80.335938 0h-50.332031v-26.117188h50.332031zm-80.332031 0h-50.332031v-26.117188h50.332031zm0 315.210937v26.117187h-50.332031v-26.117187zm30 0h50.332031v26.117187h-50.332031zm80.332031 0h50.335938v26.117187h-50.335938zm80.335938 0h50.332031v26.117187h-50.332031zm129.769531-315.210937h-49.4375v-26.117188h49.4375zm-400.769531-26.117188v26.117188h-51.230469v-26.117188zm-51.230469 341.328125h51.230469v26.117187h-51.230469zm402.5625 26.117187v-26.117187h49.4375v26.117187zm0 0"/></svg>`,
		activate: true,
		content: {
			type: 'video',
			src: 'https://dev-exclusible-com.s3.amazonaws.com/uploads/mov_bbb.mp4',
			autoplay: true,
			loop: true,
			muted: true,
			controls: false,
			classes: ['w-full', 'aspect-video'],
			attributes: {
				playsinline: true,
				muted: true,
			},
		},
	}
}
