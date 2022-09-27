import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

import { UploadFileInput } from './UploadFileInput'

type Accept = 'image/*' | 'video/*'

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
	const [typeAccept, setTypeAccept] = useState<Accept>('image/*')

	const formatAssetUrl = (file: Record<string, any>) => `https://${s3Options.bucket}.s3.amazonaws.com/${file.Key}`

	const fetchAssets = async (acceptFile?: Accept) => {
		if (!window.global) {
			// aws-sdk requires global to exist
			;(window as any).global = window
		}

		const AWS = await import('aws-sdk')
		const s3 = new AWS.S3(s3Options)
		const params = { Bucket: s3Options.bucket }

		// create const to handle image and video format

		const imageType = acceptFile === 'image/*' ? /.(png|jpeg|jpg|webp|svg|gif)/gim : /(mp4|webm)/gim

		s3.listObjects(params, (err, data) =>
			setAssets(data.Contents?.filter((content) => imageType.test(content.Key ?? '')) as Record<string, any>[])
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
			s3.upload(params)
				.promise()
				.then(fetchAssets as any)
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

		s3.deleteObject(params)
			.promise()
			.then(fetchAssets as any)
	}

	useEffect(() => {
		if (!editor) return

		const handleCustomAsset = (props) => {
			const accept = props.options.accept

			setTypeAccept(accept)
			props.container.appendChild(containerRef.current)

			propsRef.current = props

			fetchAssets(accept)
		}

		editor.on('asset:custom', handleCustomAsset)

		return () => {
			editor.off('asset:custom', handleCustomAsset)
		}
	}, [editor])

	const handleVideoSource = (asset: any) => {
		const url = `https://${s3Options.bucket}.s3.amazonaws.com/${asset.Key}`

		propsRef.current.options.target.view.opts.model.set('src', url)
	}

	return (
		<div ref={containerRef}>
			<div className="flex" style={{ flexDirection: 'row' }}>
				<UploadFileInput typeAccept={typeAccept} onChange={uploadFiles} />
				<div className={styles.assets_container}>
					{assets.map((asset) => (
						<div
							key={asset.Key}
							className={styles.asset}
							onClick={() =>
								typeAccept === 'image/*'
									? propsRef.current.select(formatAssetUrl(asset), false)
									: handleVideoSource(asset)
							}>
							{typeAccept === 'image/*' ? (
								<img src={formatAssetUrl(asset)} alt="" />
							) : (
								<video src={formatAssetUrl(asset)} muted />
							)}
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
