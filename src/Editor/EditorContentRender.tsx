import { ReactNode, useEffect, useState } from 'react'

import { Editor } from '.'

interface EditorContentRenderProps {
	data: { components: object[] | any | string; styles: string }
	loadingFallback?: ReactNode
}

export function EditorContentRender({ data, loadingFallback }: EditorContentRenderProps) {
	const [html, setHtml] = useState('')
	const [editor, setEditor] = useState<any>()

	useEffect(() => {
		const handle = async () => {
			const juice = (await import('juice')).default
			const htmlStr = editor.getHtml()
			const cssStr = editor.getCss()
			const inlineHTML = juice(`<style>${cssStr}</style>${htmlStr}`)

			setHtml(inlineHTML)
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
