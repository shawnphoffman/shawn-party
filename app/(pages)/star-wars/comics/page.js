import { memo } from 'react'

const dataUrl = 'https://api.shawn.party/api/syno/comics'

async function getData() {
	try {
		const res = await fetch(dataUrl, { next: { revalidate: 60 * 60 * 24 } })
		const data = await res.json()

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
