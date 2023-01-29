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
	const [first, setFirst] = useState('')
	const [last, setLast] = useState('')
	const [maiden, setMaiden] = useState('')
	const [town, setTown] = useState('')
	const [output, setOutput] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (query.first) {
			setFirst(query.first)
		}
		if (query.last) {
			setLast(query.last)
		}
		if (query.maiden) {
			setMaiden(query.maiden)
		}
		if (query.town) {
			setTown(query.town)
		}
	}, [query])

	const buttonDisabled = useMemo(() => {
		return !(first && last && maiden && town)
	}, [first, last, maiden, town])

	const handleFirstChange = useCallback(e => {
		setFirst(e.target.value)
	}, [])

	const handleLastChange = useCallback(e => {
		setLast(e.target.value)
	}, [])

	const handleMaidenChange = useCallback(e => {
		setMaiden(e.target.value)
	}, [])

	const handleTownChange = useCallback(e => {
		setTown(e.target.value)
	}, [])

	const handleSubmit = useCallback(async () => {
		setLoading(true)
		var requestOptions = {
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
			<HorizontalRule />
			<div>I don&apos;t know why I made this. This is currently missing validation so it could break if you don't fill everything in.</div>
			<h3>Your first name</h3>
			<NativeControl type="text" onChange={handleFirstChange} value={first} />
			<h3>Your last name</h3>
			<NativeControl type="text" onChange={handleLastChange} value={last} />
			<h3>Your mother's maiden name</h3>
			<NativeControl type="text" onChange={handleMaidenChange} value={maiden} />
			<h3>Your childhood hometown</h3>
			<NativeControl type="text" onChange={handleTownChange} value={town} />
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
