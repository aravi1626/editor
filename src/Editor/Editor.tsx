import { HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import isEqual from 'lodash/isEqual'

import EditorStyle, { canvasCss } from './EditorStyle'
import { loadPanels } from './panels'
import { loadBlocks } from './blocks'

export type EditorData = { components: object[] | any | string; styles: string }

export interface EditorProps extends HTMLAttributes<HTMLDivElement> {
	data?: EditorData
	headless?: boolean
	onEditorLoad?(editorInstance: any): void
	onChangeValue?(data: EditorData): void
	onSave?(data: EditorData): void
}

export function Editor(props: EditorProps) {
	return <EditorComponent {...props} />
}

function EditorComponent({ data, headless, onEditorLoad, onChangeValue, onSave, ...props }: EditorProps) {
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
			mediaCondition: 'min-width',
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
						widthMedia: '',
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
						widthMedia: '1280',
						default: true,
					},
				],
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
		editor.setDevice('Desktop')
		setEditorInstance(editor)
	}, [headless])

	const getDataFromEditor = useCallback((editor: any) => {
		const components = JSON.stringify(editor.getComponents())
		const styles = editor.getCss()
		return { components, styles }
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

	// Effect to listen to editor changes.
	useEffect(() => {
		if (!editorInstance) return

		const handleChangesCount = (editor: any) => {
			const newData = getDataFromEditor(editor)

			oldDataRef.current = newData

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
		</div>
	)
}
