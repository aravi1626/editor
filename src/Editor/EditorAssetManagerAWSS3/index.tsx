import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

import { UploadFileInput } from './UploadFileInput'

type Props = {
	editor?: any
	s3Options: {
		bucket: string
		region: string
		accessKeyId: string
		secretAccessKey: string
	}
}

export function EditorAssetManagerAWSS3({ editor, s3Options }: Props) {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const propsRef = useRef<any>(null)
	const [assets, setAssets] = useState<Record<string, any>[]>([])

	const formatAssetUrl = (file: Record<string, any>) => `https://${s3Options.bucket}.s3.amazonaws.com/${file.Key}`

	const fetchAssets = async () => {
		if (!window.global) {
			// aws-sdk requires global to exist
			;(window as any).global = window
		}

		const AWS = await import('aws-sdk')
		const s3 = new AWS.S3(s3Options)
		const params = { Bucket: s3Options.bucket }

		s3.listObjects(params, (err, data) =>
			setAssets(
				data.Contents?.filter((content) => /.(png|jpeg|jpg|webp|svg|gif)/gim.test(content.Key ?? '')) as Record<
					string,
					any
				>[]
			)
		)
	}

	const uploadFiles = async (files: FileList) => {
		if (!window.global) {
			// aws-sdk requires global to exist
			;(window as any).global = window
		}

		const AWS = await import('aws-sdk')
		const s3 = new AWS.S3(s3Options)

		Array.from(files).map(async (file) => {
			const params = {
				Bucket: s3Options.bucket,
				Key: `uploads/${file.name}`,
				Body: file,
			}
			s3.upload(params).promise().then(fetchAssets)
		})
	}

	const deleteFile = async (assetFile: Record<string, any>) => {
		if (!window.global) {
			// aws-sdk requires global to exist
			;(window as any).global = window
		}

		const AWS = await import('aws-sdk')
		const s3 = new AWS.S3(s3Options)

		const params = {
			Bucket: s3Options.bucket,
			Key: assetFile.Key,
		}

		s3.deleteObject(params).promise().then(fetchAssets)
	}

	useEffect(() => {
		if (!editor) return

		const handleCustomAsset = (props) => {
			props.container.appendChild(containerRef.current)

			propsRef.current = props

			fetchAssets()
		}

		editor.on('asset:custom', handleCustomAsset)

		return () => {
			editor.off('asset:custom', handleCustomAsset)
		}
	}, [editor])

	return (
		<div ref={containerRef}>
			<div className="flex" style={{ flexDirection: 'row' }}>
				<UploadFileInput onChange={uploadFiles} />
				<div className={styles.assets_container}>
					{assets.map((asset) => (
						<div key={asset.Key} className={styles.asset} onClick={() => propsRef.current.select(asset, false)}>
							<img src={formatAssetUrl(asset)} alt="" />
							<div className={styles.info}>{asset.Key}</div>
							<div
								className={styles.close}
								onClick={(e) => {
									e.stopPropagation()
									deleteFile(asset)
									setAssets((prev) => prev.filter((item) => !asset.Key.includes(item.Key)))
								}}>
								⨯
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
