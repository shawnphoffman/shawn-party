import { memo, useCallback, useEffect, useState } from 'react'
import { styled } from 'linaria/react'

import ObsText, { TextStyle } from 'components/obs/ObsText'

const Label = styled.label`
	margin: 0px 8px;
`

const Dropdown = styled.select`
	margin: 8px 0px;
`

// import { useRouter } from 'next/router'

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
`

const Help = () => {
	const [debug, setDebug] = useState(true)
	const [originalText, setOriginal] = useState('Please consider following!')
	const [textStyle, setTextStyle] = useState(TextStyle.JUMP)
	const [encoded, setEncoded] = useState('')

	const handleTextChange = useCallback(e => {
		const value = e.target.value
		setOriginal(value)
	}, [])

	const handleStyleChange = useCallback(e => {
		const value = e.target.value
		setTextStyle(value)
	}, [])

	const handleDebugChange = useCallback(e => {
		const value = e.target.checked
		setDebug(value)
	}, [])

	useEffect(() => {
		const temp = encodeURIComponent(originalText)
		setEncoded(temp)
	}, [originalText])

	return (
		<>
			<h1>OBS Source Help</h1>
			<h2>Text</h2>
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

			<h3>Text Builder</h3>
			<NativeControl type="text" onChange={handleTextChange} value={originalText} />
			<Dropdown onChange={handleStyleChange} defaultValue={textStyle}>
				<option>{TextStyle.GRADIENT}</option>
				<option>{TextStyle.JUMP}</option>
				<option>{TextStyle.WAVE}</option>
			</Dropdown>
			<div>
				<input type="checkbox" name="debug" onChange={handleDebugChange} checked={debug} />
				<Label>Always visible?</Label>
			</div>
			<h4>Preview</h4>
			<ObsText textStyle={textStyle} debug={debug}>
				{originalText || ''}
			</ObsText>
			<div>
				<a href={`/obs/text?text=${encoded}&debug=${debug.toString()}&style=${textStyle}`} target="_blank" rel="noreferrer">
					Click here for your personalized link!
				</a>
			</div>

			<h4>URL Preview</h4>
			<pre>
				/obs/text?text={encoded}&debug={debug.toString()}&style={textStyle}
			</pre>
		</>
	)
}

export default memo(Help)
