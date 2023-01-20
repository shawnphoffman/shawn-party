import { memo, useMemo } from 'react'
import { styled } from 'linaria/react'
import { useRouter } from 'next/router'

const Help = () => {
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
		</>
	)
}

export default memo(Help)
