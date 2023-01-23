import { memo, useMemo } from 'react'
import { styled } from 'linaria/react'
import { useRouter } from 'next/router'

import ObsText from 'components/obs/ObsText'

const TextStyle = {
	GRADIENT: 'gradient',
	JUMP: 'jump',
	WAVE: 'wave',
}

const Text = styled.div`
	font-size: 36px;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	padding-bottom: 12px;
`

const Follow = () => {
	const { query } = useRouter()

	const text = useMemo(() => {
		return query?.text || 'Please consider following'
	}, [query])

	const style = useMemo(() => {
		return TextStyle[query?.style?.toUpperCase()] || TextStyle.JUMP
	}, [query])

	const debug = useMemo(() => {
		return query?.debug || false
	}, [query])

	return (
		<ObsText style={style} debug={debug}>
			{text}
		</ObsText>
	)
}

export default memo(Follow)
