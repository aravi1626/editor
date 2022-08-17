import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

import { Editor, EditorContentRender, EditorData } from './Editor'

const App: React.FC = () => {
	const [data, setData] = useState<EditorData | undefined>()
	const [preview, setPreview] = useState(false)

	return (
		<main>
			<button onClick={() => setPreview(true)}>preview</button>
			<Editor style={{ width: '100%', height: '100vh' }} onSave={setData} onChangeValue={setData} />
			{preview && (
				<div
					style={{
						position: 'absolute',
						inset: 0,
						width: '100%',
						height: '100%',
						backdropFilter: 'blur(4px)',
						zIndex: 10,
						backgroundColor: 'rgba(255,255,255,0.8)',
					}}>
					<button onClick={() => setPreview(false)}>close</button>
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
