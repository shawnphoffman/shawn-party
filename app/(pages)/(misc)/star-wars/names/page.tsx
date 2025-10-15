'use client'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import styles from './page.module.css'

const Names = () => {
	const query = useSearchParams()
	const [first, setFirst] = useState('')
	const [last, setLast] = useState('')
	const [maiden, setMaiden] = useState('')
	const [town, setTown] = useState('')
	const [output, setOutput] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const qFirst = query.get('first')
		if (qFirst) {
			setFirst(qFirst)
		}
		const qLast = query.get('last')
		if (qLast) {
			setLast(qLast)
		}
		const qMaiden = query.get('maiden')
		if (qMaiden) {
			setMaiden(qMaiden)
		}
		const qTown = query.get('town')
		if (qTown) {
			setTown(qTown)
		}
	}, [query])

	const buttonDisabled = useMemo(() => {
		return !(first && last && maiden && town)
	}, [first, last, maiden, town])

	const handleFirstChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setFirst(e.target.value)
	}, [])

	const handleLastChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setLast(e.target.value)
	}, [])

	const handleMaidenChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setMaiden(e.target.value)
	}, [])

	const handleTownChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setTown(e.target.value)
	}, [])

	const handleSubmit = useCallback(async () => {
		setLoading(true)
		const requestOptions: RequestInit = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				first,
				last,
				maiden,
				town,
			}),
		}

		const res = await fetch('https://api.shawn.party/api/star-wars/name-generator', requestOptions)
		const data = await res.json()

		setLoading(false)
		setOutput(data.full)
	}, [first, last, maiden, town])

	return (
		<>
			<h1>Star Wars Name Generator</h1>
			<hr className={styles.horizontalRule} />
			<div>
				I don&apos;t know why I made this. This is currently missing validation so it could break if you don&apos;t fill everything in.
			</div>
			<h3>Your first name</h3>
			<input className={styles.nativeControl} type="text" onChange={handleFirstChange} value={first} />
			<h3>Your last name</h3>
			<input className={styles.nativeControl} type="text" onChange={handleLastChange} value={last} />
			<h3>Your mother&apos;s maiden name</h3>
			<input className={styles.nativeControl} type="text" onChange={handleMaidenChange} value={maiden} />
			<h3>Your childhood hometown</h3>
			<input className={styles.nativeControl} type="text" onChange={handleTownChange} value={town} />
			<br />
			<button disabled={buttonDisabled} onClick={handleSubmit}>
				Generate Name
			</button>
			{loading && (
				<>
					<h2>Loading...</h2>
				</>
			)}
			{output && (
				<>
					<h2>Generated Name</h2>
					<h3>{output}</h3>
				</>
			)}
		</>
	)
}

export default memo(Names)
