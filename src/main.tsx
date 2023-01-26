import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

import { Editor, EditorAssetManagerAWSS3, EditorContentRender, EditorStateWithDOMContent } from './Editor'

const App: React.FC = () => {
	const [data, setData] = useState<EditorStateWithDOMContent | undefined>()
	const [preview, setPreview] = useState(false)
	const buttonClassName = 'bg-primary text-white border-none text-px-18 cursor-pointer px-px-12'

	return (
		<main className="flex flex-col h-screen">
			<button className={buttonClassName} onClick={() => setPreview(true)}>
				press to preview
			</button>
			<Editor
				className="flex-1"
				data={data}
				onSave={(state) => setData(state)}
				onChangeValue={(state) => setData(state)}
				renderCustomAssetManager={(editor) => (
					<EditorAssetManagerAWSS3
						editor={editor}
						s3Options={{
							bucket: 'dev-exclusible-com',
							region: 'eu-west-1',
							accessKeyId: 'AKIAVSEBRB7OU7IVUU7T',
							secretAccessKey: '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',
						}}
					/>
				)}
			/>
			{preview && (
				<div
					className="fixed inset-0 w-full h-full z-10 bg-white/80 overflow-auto"
					style={{
						backdropFilter: 'blur(4px)',
					}}>
					<button className={buttonClassName + ' sticky top-0'} onClick={() => setPreview(false)}>
						press to close preview
					</button>
					<EditorContentRender data={data} />
				</div>
			)}
		</main>
	)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
