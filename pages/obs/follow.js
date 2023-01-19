import { memo, useMemo } from 'react'
import { styled } from 'linaria/react'
import { useRouter } from 'next/router'

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

	return (
		<Container>
			<Text className="animate-character">{text}</Text>
			<Text className="wave">
				<span style={{ '--i': '1' }}>P</span>
				<span style={{ '--i': '2' }}>L</span>
				<span style={{ '--i': '3' }}>E</span>
				<span style={{ '--i': '4' }}>A</span>
				<span style={{ '--i': '5' }}>S</span>
				<span style={{ '--i': '6' }}>E</span>
				<span style={{ '--i': '7' }}>&nbsp;</span>
				<span style={{ '--i': '8' }}>F</span>
				<span style={{ '--i': '9' }}>O</span>
				<span style={{ '--i': '10' }}>L</span>
				<span style={{ '--i': '11' }}>L</span>
				<span style={{ '--i': '12' }}>O</span>
				<span style={{ '--i': '13' }}>W</span>
				<span style={{ '--i': '14' }}>!</span>
				{/* <span style={{ '--i': '15' }}>P</span> */}
				{/* <span style={{ '--i': '16' }}>P</span> */}
			</Text>
			<Text>
				<div className="content">
					<div>{text}</div>
					<div>{text}</div>
				</div>
			</Text>
		</Container>
	)
}

export default memo(Follow)