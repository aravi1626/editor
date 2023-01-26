export type EditorDataState = { components: object[] | any | string; styles: string }
export type EditorStateWithDOMContent = { state: EditorDataState; html: string; css: string; js: string }
