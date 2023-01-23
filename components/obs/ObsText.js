import { memo } from 'react'
import { styled } from 'linaria/react'

export const TextStyle = {
	GRADIENT: 'gradient',
	JUMP: 'jump',
	WAVE: 'wave',
}

const Text = styled.div`
	font-size: 36px;
`

const Wow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	padding-bottom: 12px;
`

const ObsText = ({ textStyle = TextStyle.JUMP, debug = false, children }) => {
	return (
		<div className={debug || 'animate'}>
			<Wow>
				{textStyle === TextStyle.GRADIENT && <Text className="gradient">{children}</Text>}
				{textStyle === TextStyle.JUMP && (
					<Text className="jump">
						{[...children].map((t, i) => (
							<span key={i} style={{ '--i': i + 1 }}>
								{t}
							</span>
						))}
					</Text>
				)}
				{textStyle === TextStyle.WAVE && (
					<Text className="wave">
						<div>{children}</div>
						<div>{children}</div>
					</Text>
				)}
			</Wow>
		</div>
	)
}

export default memo(ObsText)
