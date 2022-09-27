import { HTMLAttributes, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import isEqual from 'lodash/isEqual'

import EditorStyle, { canvasCss } from './EditorStyle'
import { loadPanels } from './panels'
import { loadBlocks } from './blocks'

export type EditorData = { components: object[] | any | string; styles: string }
export type EditorStateWithHtml = { state: EditorData; html: string }

export interface EditorProps extends HTMLAttributes<HTMLDivElement> {
	data?: EditorData
	headless?: boolean
	onEditorLoad?(editorInstance: any): void
	onChangeValue?(data: EditorStateWithHtml): void
	onSave?(data: EditorStateWithHtml): void
	renderCustomAssetManager?(editorInstance: any): ReactNode
}

export function Editor(props: EditorProps) {
	return <EditorComponent {...props} />
}

function EditorComponent({
	data,
	headless,
	onEditorLoad,
	onChangeValue,
	onSave,
	renderCustomAssetManager,
	...props
}: EditorProps) {
	const editorContainerRef = useRef<HTMLDivElement | null>(null)
	const oldDataRef = useRef<EditorData>()

	const [editorInstance, setEditorInstance] = useState<any>()
	const [isMounted, setIsMounted] = useState(false)

	const init = useCallback(async () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		await import('grapesjs/dist/css/grapes.min.css')
		const { styles } = await import('./styles/styles')
		const GrapeJS: any = await import('grapesjs')
		const editor = GrapeJS.init({
			container: editorContainerRef.current ?? undefined,
			width: '100%',
			height: '100%',
			showDevices: false,
			traitsEditor: true,
			selectorManager: {
				// This is not documented in GrapesJS, but it can replace a selector rule,
				// we add this allows of width rules from tailwind. Add more rules here.
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				escapeName: (name: string): string => name.trim().replace(/w-\d{1,2}(-)\d{1,2}/gi, '/'),
				// This option will avoid to inject into classes selectors the inline styles ones.
				componentFirst: true,
			},
			storageManager: false,
			deviceManager: {
				devices: [
					{
						id: 'mobile',
						name: 'Mobile',
						width: '375',
						widthMedia: '767.99',
						height: '667',
					},
					{
						id: 'tablet',
						name: 'Tablet',
						width: '768',
					},
					{
						id: 'desktop',
						name: 'Desktop',
						width: '',
						widthMedia: '',
					},
				],
			},
			assetManager: {
				modalTitle: 'Select File',
				custom: !!renderCustomAssetManager,
			},
			canvasCss: canvasCss,
			forceClass: false,
			baseCss: styles,
			protectedCss:
				'body{background-color:white;padding:0;margin:0;}body *{box-sizing: border-box;}.cell {min-height: 30px;}',
			exportWrapper: false,
			wrapperIsBody: false,
			showOffsets: true,
			jsInHtml: true,
			headless: headless,
		})
		setEditorInstance(editor)
	}, [headless])

	const getDataFromEditor = useCallback((editor: any): EditorStateWithHtml => {
		const components = JSON.stringify(editor.getComponents())
		const htmlStr = editor.getHtml()
		const styles = editor.getCss()

		return { state: { components, styles }, html: `<style>${styles}</style>${htmlStr}` }
	}, [])

	// Effect to load editor assets.
	useEffect(() => {
		if (!editorInstance) return

		// Add build editor artifacts here
		loadPanels(editorInstance)
		loadBlocks(editorInstance)
	}, [editorInstance])

	// Effect to load editor data.
	useEffect(() => {
		if (!editorInstance) return

		if (!isEqual(oldDataRef.current, data)) {
			editorInstance.setComponents(data?.components && JSON.parse(data?.components))
			editorInstance.setStyle(data?.styles)
		}
	}, [editorInstance, data])

	// Effect to execute to hoist function editor load event.
	useEffect(() => {
		if (!editorInstance) return

		onEditorLoad?.(editorInstance)
	}, [editorInstance, onEditorLoad])

	// Inject app theme's font families inside iframe editor.
	useEffect(() => {
		if (!editorInstance) return

		const editorFrameHead = editorInstance.Canvas?.getFrameEl?.()?.contentWindow?.document?.head
		const links = [
			'https://fonts.googleapis.com/css2?family=Abel&display=swap',
			'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
		]

		editorFrameHead &&
			links.forEach((link) => {
				const linkEl = document.createElement('link')

				linkEl.rel = 'stylesheet'
				linkEl.href = link
				editorInstance.Canvas.getFrameEl().contentWindow?.document.head.appendChild(linkEl)
			})
	}, [editorInstance])

	// Effect to listen to editor changes.
	useEffect(() => {
		if (!editorInstance) return

		const handleChangesCount = (editor: any) => {
			const newData = getDataFromEditor(editor)

			oldDataRef.current = newData.state

			onChangeValue?.(newData)
		}

		editorInstance.on('change:changesCount', handleChangesCount)

		return () => {
			editorInstance.off('change:changesCount', handleChangesCount)
		}
	}, [editorInstance, getDataFromEditor, onChangeValue])

	useEffect(() => {
		if (!editorInstance) return

		const handleSave = (editor: any) => onSave?.(getDataFromEditor(editor))

		editorInstance.on('run:save', handleSave)

		return () => {
			editorInstance.off('run:save', handleSave)
		}
	}, [editorInstance, getDataFromEditor, onSave])

	useEffect(() => {
		isMounted && init()
	}, [init, isMounted])

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<div {...props}>
			<EditorStyle />
			<div ref={editorContainerRef} />
			<div style={{ display: 'none' }}>
				{!headless && renderCustomAssetManager && renderCustomAssetManager(editorInstance)}
			</div>
		</div>
	)
}
