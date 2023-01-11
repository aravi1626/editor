export const canvasCss = `.gjs-selected,.gjs-hovered,.gjs-cv-canvas .gjs-highlighter {outline-color: black !important;}`

export const protectedCss =
	'body{background-color:white;padding:0;margin:0;}body *{box-sizing: border-box;}.cell {min-height: 30px;}blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {margin: 0;}h1, h2, h3, h4, h5, h6 {font-size: inherit;font-weight: inherit;}'

export default function EditorStyle() {
	return (
		<style
			dangerouslySetInnerHTML={{
				__html: `
    .gjs-one-bg {
        background-color: white !important;
    }

    .gjs-three-bg {
        color: white !important;
        background-color: black !important;
    }

    .gjs-two-color {
        color: #242424 !important;
    }

    .gjs-four-color {
        color: #242424 !important;
    }

    .gjs-four-color-h:hover {
        color: #242424 !important;
        background-color: #f1f1f1 !important;
    }

    .gjs-field {
        color: #242424 !important;
        background-color: #f1f1f1 !important;
    }

    .gjs-field-colorp {
        width: 34px;
    }

    .gjs-field-checkbox input:checked + .gjs-chk-icon {
        border-color: rgba(0, 0, 0, 0.5);
    }

    .gjs-category-title,
    .gjs-layer-title,
    .gjs-block-category .gjs-title,
    .gjs-sm-sector .gjs-sm-title,
    .gjs-clm-tags .gjs-sm-title {
        background-color: white !important;
    }

    .gjs-sm-sector .gjs-sm-field input,
    .gjs-clm-tags .gjs-sm-field input,
    .gjs-sm-sector .gjs-clm-select input,
    .gjs-clm-tags .gjs-clm-select input,
    .gjs-sm-sector .gjs-clm-field input,
    .gjs-clm-tags .gjs-clm-field input,
    .gjs-sm-sector .gjs-sm-field select,
    .gjs-clm-tags .gjs-sm-field select,
    .gjs-sm-sector .gjs-clm-select select,
    .gjs-clm-tags .gjs-clm-select select,
    .gjs-sm-sector .gjs-clm-field select,
    .gjs-clm-tags .gjs-clm-field select {
        color: #242424 !important;
        background-color: #f1f1f1 !important;
    }
    .gjs-field .gjs-d-s-arrow {
    	border-top-color: #242424 !important;
    }

    .gjs-block {
        padding: 0 !important;
        width: 100% !important;
        min-height: auto !important;
    }

    .gjs-color-warn {
        color: #ffa100 !important;
    }

    .gjs-block-label {
        color: white !important;
        padding: 1rem;
        background-color: #242424;
        font-weight: bold;
        font-family: unset;
    }

    #gjs-clm-new {
        color: #242424 !important;
    }

    .gjs-pn-panel.gjs-pn-commands > .gjs-pn-buttons {
        width: fit-content;
        margin: auto;
    }

    .gjs-pn-buttons {
        gap: 4px;
        justify-content: space-around !important;
    }

    span.gjs-pn-btn.fa.fa-mobile {
        margin-right: auto;
    }

    .gjs-blocks-cs {
        font-family: 'Inter', sans-serif !important;
    }

    .gjs-block {
        border-radius: 0.5rem;
        overflow: hidden;
    }

    .gjs-toolbar {
        background-color: black;
    }

    .gjs-badge {
        background-color: black !important;
    }

    .gjs-pn-panel.gjs-pn-commands,
    .gjs-pn-panel.gjs-pn-options,
    .gjs-pn-panel.gjs-pn-state {
        padding: 4px 5px;
    }

    .gjs-cv-canvas {
        background-color: #fafafa !important;
    }
    .gjs-block__media {
    	text-align: left;
    	padding: 4px;
    }
    
    i.gjs-layer-vis * {
    	width: inherit;
    }
    i.gjs-layer-caret svg {
    	width: inherit;
    }
    div.gjs-layer-move {
    	width: 27px;
    }
		`,
			}}
		/>
	)
}
