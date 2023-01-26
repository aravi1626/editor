import { ReactNode, useEffect, useRef } from 'react'
import JsxParser from 'react-jsx-parser'
import { v4 as uuid } from 'uuid'

import { EditorStateWithDOMContent } from './types'
import * as CustomBlockComponents from './blocks/components/components'

// Map block components to a named structure to keep names after bundle.
const blockComponents = Object.keys(CustomBlockComponents).reduce(
	(acc, key) => ({ ...acc, [CustomBlockComponents[key].editor.name]: CustomBlockComponents[key] }),
	{}
)

interface EditorContentRenderProps {
	data?: EditorStateWithDOMContent
	loadingFallback?: ReactNode
}

export function EditorContentRender({ data, loadingFallback }: EditorContentRenderProps) {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const uidRef = useRef('c' + uuid())

	useEffect(() => {
		if (!data) return

		// Delete every style related to this container, so it can be regenerated
		document.querySelectorAll(`#${uidRef.current}`).forEach((node) => containerRef.current?.removeChild(node))

		const style = document.createElement('style')
		style.id = uidRef.current
		style.innerHTML = data?.css

		containerRef.current?.prepend(style)

		eval(data.js)
	}, [data])

	if (data === null) return <>{loadingFallback || null}</>

	return (
		<div ref={containerRef}>
			{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
			{/*@ts-ignore*/}
			<JsxParser
				allowUnknownElements
				autoCloseVoidElements
				componentsOnly={false}
				jsx={data?.html.replace(/class=/g, 'className=')}
				components={blockComponents as any}
			/>
		</div>
	)
}
