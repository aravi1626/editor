import { useRef } from 'react'
import styles from './styles.module.css'

type Props = {
	onChange(files: FileList): void
}

export function UploadFileInput({ onChange }: Props) {
	const dropZoneElementRef = useRef<HTMLDivElement | null>(null)
	const inputRef = useRef<HTMLInputElement | null>(null)

	return (
		<div
			ref={dropZoneElementRef}
			className={styles['drop-zone']}
			onClick={() => inputRef.current?.click()}
			onDragOver={(e) => {
				e.preventDefault()
				dropZoneElementRef.current?.classList.add('drop-zone--over')
			}}
			onDrop={(e) => {
				e.preventDefault()

				e.dataTransfer?.files && onChange(e.dataTransfer.files)

				dropZoneElementRef.current?.classList.remove('drop-zone--over')
			}}>
			<span className={styles['drop-zone__prompt']}>Drop file here or click to upload</span>
			<input
				ref={inputRef}
				type="file"
				accept="image/*"
				name="myFile"
				className={styles['drop-zone__input']}
				onChange={(e) => {
					const files = e.currentTarget.files

					files && onChange(files)

					// Reset input on change
					e.currentTarget.type = ''
					e.currentTarget.type = 'file'
				}}
			/>
		</div>
	)
}
