import { memo, useCallback, useEffect, useState } from 'react'
import { styled } from 'linaria/react'
// import { useRouter } from 'next/router'

const NativeControl = styled.input`
	margin: 0;
	margin-bottom: 8px;
	padding: 12px 16px;
	/* font-size: 18px; */
	line-height: 1.2;
	text-align: start;
	text-indent: 0px;
	text-transform: none;
	word-spacing: 0px;
	/* border-color: var(--inputBorder); */
	border-style: solid;
	border-width: 0;
	/* background-color: var(--transparent); */
	opacity: 1;
	flex: 1;
	user-select: all;
	/* color: var(--bg); */

	&:focus {
		outline-style: none;
		box-shadow: none;
		/* border-color: var(--transparent); */
	}

	&:read-only {
		color: grey;
		user-select: all;
	}

	width: 100%;
	/* height: 100px; */
`

const Help = () => {
	const [original, setOriginal] = useState('')
	const [encoded, setEncoded] = useState('')

	const handleOriginalChange = useCallback(e => {
		const value = e.target.value
		setOriginal(value)
	}, [])

	useEffect(() => {
		const temp = encodeURIComponent(original)
		setEncoded(temp)
	}, [original])

	return (
		<>
			<h1>OBS Source Help</h1>
			<h2>Text</h2>
			<h3>Options</h3>
			<ul>
				<li>text</li>
				<li>style</li>
				<li>debug</li>
				<li>duration (TBD)</li>
			</ul>
			<h3>Styles</h3>
			<ul>
				<li>gradient</li>
				<li>jump</li>
				<li>wave</li>
			</ul>
			<h3>Examples</h3>
			<ul>
				<li>
					<a href="/obs/text?text=Hello%20there%20friend!&debug=true&style=gradient" target="_blank">
						Gradient
					</a>
				</li>
				<li>
					<a href="/obs/text?text=Hello%20there%20friend!&debug=true&style=jump" target="_blank">
						Jump
					</a>
				</li>
				<li>
					<a href="/obs/text?text=Hello%20there%20friend!&debug=true&style=wave" target="_blank">
						Wave
					</a>
				</li>
			</ul>
			<h3>Text Encoder</h3>
			<NativeControl type="text" onChange={handleOriginalChange} value={original} />
			{/* {encoded && <NativeControl value={`text=${encoded}`} readOnly />} */}
			{encoded && <div style={{ userSelect: 'all' }}>{`text=${encoded}`}</div>}
		</>
	)
}

export default memo(Help)
