import { memo, useMemo } from 'react'
import { styled } from 'linaria/react'
import { useRouter } from 'next/router'

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
		<Container className={debug || 'animate'}>
			{style === TextStyle.GRADIENT && <Text className="gradient">{text}</Text>}
			{style === TextStyle.JUMP && (
				<Text className="jump">
					{[...text].map((t, i) => (
						<span key={i} style={{ '--i': i + 1 }}>
							{t}
						</span>
					))}
				</Text>
			)}
			{style === TextStyle.WAVE && (
				<Text className="wave">
					<div>{text}</div>
					<div>{text}</div>
				</Text>
			)}
		</Container>
	)
}

export default memo(Follow)
