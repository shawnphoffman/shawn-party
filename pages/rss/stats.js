/* eslint-disable react/no-unescaped-entities */
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from 'linaria/react'
import { useRouter } from 'next/router'

const HorizontalRule = styled.hr`
	margin: 32px 0px;
`

const NativeControl = styled.input`
	margin: 0;
	margin-bottom: 8px;
	padding: 12px 16px;
	line-height: 1.2;
	text-align: start;
	text-indent: 0px;
	text-transform: none;
	word-spacing: 0px;
	border-style: solid;
	border-width: 0;
	opacity: 1;
	flex: 1;
	user-select: all;

	&:focus {
		outline-style: none;
		box-shadow: none;
	}

	&:read-only {
		color: grey;
		user-select: all;
	}

	width: 100%;
	display: block;
	max-width: 720px;
`

const Names = () => {
	const { query } = useRouter()
	const [url, setUrl] = useState('')
	const [output, setOutput] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (query.url) {
			setUrl(query.url)
		}
	}, [query])

	const buttonDisabled = useMemo(() => {
		return !url
	}, [url])

	const handleUrlChange = useCallback(e => {
		setUrl(e.target.value)
	}, [])

	const handleSubmit = useCallback(async () => {
		setLoading(true)
		setOutput('')
		setError('')

		try {
			const fetchUrl = `https://api.shawn.party/api/rss/stats?url=${url}`
			const res = await fetch(fetchUrl)
			const data = await res.json()
			setOutput(data)
		} catch {
			setError('Something went wrong...')
		} finally {
			setLoading(false)
		}
	}, [url])

	useEffect(() => {
		console.log('Output', output)
	}, [output])

	return (
		<>
			<h1>Podcast Stats</h1>
			<HorizontalRule />
			<h3>Feed URL</h3>
			<NativeControl type="text" onChange={handleUrlChange} value={url} />
			<br />
			<button disabled={buttonDisabled} onClick={handleSubmit}>
				Fetch Stats
			</button>
			{loading && (
				<>
					<h2>Loading...</h2>
				</>
			)}
			{error && (
				<>
					<h2>{error}</h2>
				</>
			)}
			{output && (
				<>
					<h2>Podcast Details</h2>
					<h3>Title: {output.title}</h3>
					<h3>Total Episodes: {output.total.count}</h3>
					<h3>Total Duration: {output.total.duration.display}</h3>
					<h3>Episodes:</h3>
					<ul>
						{output.episodes.map(e => (
							<li key={e.guid}>
								{e.title} ({e.duration.display})
							</li>
						))}
					</ul>
					<hr />
				</>
			)}
		</>
	)
}

export default memo(Names)
