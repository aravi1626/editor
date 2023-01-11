import { ReactNode, useEffect, useRef, useState } from 'react'
import JsxParser from 'react-jsx-parser'
import { v4 as uuid } from 'uuid'

import { Editor, EditorData } from '.'

import * as CustomBlockComponents from './blocks/components/components'

// Map block components to a named structure to keep names after bundle.
const blockComponents = Object.keys(CustomBlockComponents).reduce(
	(acc, key) => ({ ...acc, [CustomBlockComponents[key].editor.name]: CustomBlockComponents[key] }),
	{}
)

interface EditorContentRenderProps {
	data?: EditorData
	loadingFallback?: ReactNode
}

export function EditorContentRender({ data, loadingFallback }: EditorContentRenderProps) {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [editor, setEditor] = useState<any>()
	const uidRef = useRef('c' + uuid())
	const [editorContent, setEditorContent] = useState<{ html: string; css: string; js: string } | null>(null)

	useEffect(() => {
		const handle = async () => {
			const htmlStr = editor.getHtml()
			const cssStr = editor.getCss()
			const jsStr = editor.getJs()

			setEditorContent({
				html: htmlStr,
				css: cssStr,
				js: jsStr,
			})
		}

		editor && handle()
	}, [editor, data])

	useEffect(() => {
		if (!editorContent) return

		document.querySelectorAll(`#${uidRef.current}`).forEach((node) => containerRef.current?.removeChild(node))

		const style = document.createElement('style')
		style.id = uidRef.current
		style.innerHTML = editorContent?.css

		containerRef.current?.prepend(style)

		eval(editorContent.js)
	}, [editorContent])

	return (
		<>
			<Editor data={data} onEditorLoad={setEditor} headless />
			{!editor ? (
				loadingFallback
			) : (
				<div ref={containerRef}>
					{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
					{/*@ts-ignore*/}
					<JsxParser
						allowUnknownElements
						autoCloseVoidElements
						componentsOnly={false}
						jsx={editorContent?.html.replace(/class=/g, 'className=')}
						components={blockComponents as any}
					/>
				</div>
			)}
		</>
	)
}
