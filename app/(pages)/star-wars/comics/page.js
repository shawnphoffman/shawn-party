import { memo } from 'react'

const dataUrl = 'https://api.shawn.party/api/syno/comics'

const requestOptions = {
	method: 'POST',
	next: { revalidate: 60 * 60 * 24 * 3 },
	body: JSON.stringify({
		secret: process.env.SYNO_SECRET,
	}),
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
}

async function getData() {
	try {
		const res = await fetch(dataUrl, requestOptions)
		const data = await res.json()

		console.log('data', data)

		const { files } = data

		return {
			files,
		}
	} catch {
		return {}
	}
}

const Comics = async () => {
	const data = await getData()

	const hasFiles = !!data?.files?.length

	return (
		<>
			<h1>Star Wars Comics</h1>
			{hasFiles ? (
				<ul>
					{data.files.map(file => (
						<li key={file}>{file}</li>
					))}
				</ul>
			) : (
				<p>Unable to load files...</p>
			)}
		</>
	)
}

export default memo(Comics)
