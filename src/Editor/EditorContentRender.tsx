import { ReactNode, useEffect, useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Editor, EditorData } from '.'

interface EditorContentRenderProps {
	data?: EditorData
	loadingFallback?: ReactNode
}

export function EditorContentRender({ data, loadingFallback }: EditorContentRenderProps) {
	const [html, setHtml] = useState('')
	const [editor, setEditor] = useState<any>()
	const uidRef = useRef(uuid())

	useEffect(() => {
		const handle = async () => {
			const htmlStr = editor.getHtml()
			const cssStr = editor.getCss()

			setHtml(`<style id="${uidRef.current}">${cssStr}</style>${htmlStr}`)
		}

		editor && handle()
	}, [editor, data])

	return (
		<>
			<Editor data={data} onEditorLoad={setEditor} headless />
			{!editor ? loadingFallback : <div dangerouslySetInnerHTML={{ __html: html }} />}
		</>
	)
}
