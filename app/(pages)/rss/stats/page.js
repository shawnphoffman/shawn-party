'use client'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import styles from '../../Styles.module.css'

const Stats = () => {
	const searchParams = useSearchParams()
	const query = searchParams.get('url')
	const [url, setUrl] = useState('')
	const [output, setOutput] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (query) {
			setUrl(query)
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
			<hr className={styles.horizontalRule} />
			<h3>Feed URL</h3>
			<input className={styles.nativeControl} type="text" onChange={handleUrlChange} value={url} />
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
					<h3>Total Duration: {output.total.duration.display || 'Unknown'}</h3>
					<h3>Episodes:</h3>
					<ul>
						{output.episodes.map(e => (
							<li key={e.guid}>
								{e.title} {e.duration.display && <span>({e.duration.display})</span>}
							</li>
						))}
					</ul>
					<hr />
				</>
			)}
		</>
	)
}

export default memo(Stats)
