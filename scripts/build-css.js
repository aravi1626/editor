// This script file purpose is to automatically generate tailwind css selectors and append them into a style variable,
// which is going to be used by the editor to be able to inject and read those styles.
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const stream = require('stream')

// Prepend and append stream chunks into variable declaration
class OutputStream extends stream.Transform {
	constructor(props) {
		super(props)
		this.write('export const styles = `')
	}
	_transform(chunk, encoding, callback) {
		this.push(chunk.toString().replace(/\\/gm, '\\\\'))
		callback()
	}
	_flush(callback) {
		this.push('`\n')
		callback()
	}
}

const outputStream = new OutputStream()

async function main() {
	const input = path.resolve(__dirname, '../src/Editor/styles.module.css')
	const output = path.resolve(__dirname, '../src/Editor/styles/output.module.css')
	const stylesOutput = path.resolve(__dirname, '../src/Editor/styles/styles.ts')

	// Generate css from tailwind config file which is going to be used by the editor and by the render.
	await execSync(`npx tailwindcss -i ${input} -o ${output} --minify --inline`)

	const readStream = fs.createReadStream(output)

	readStream
		.pipe(outputStream)
		.pipe(fs.createWriteStream(stylesOutput))
		.on('finish', () => {
			fs.unlinkSync(output)

			process.exit()
		})
}

main()
