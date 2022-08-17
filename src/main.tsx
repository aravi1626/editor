import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

import {Editor} from "./Editor";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Editor style={{width: '100%', height:'100vh'}} />
    </React.StrictMode>
)
