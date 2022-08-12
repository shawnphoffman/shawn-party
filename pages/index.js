import { memo } from 'react'
import { styled } from 'linaria/react'
import Image from 'next/image'
import head from 'public/images/head.png'

const Home = () => {
	return (
		<AppWrapper>
			<Header>
				<HeadContainer>
					<Image height={100} width={62} layout="fixed" src={head} alt="Illustration of my goofy face" />
				</HeadContainer>
				<h1>Shawn Hoffman</h1>
			</Header>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			<Description>I make websites that don't really need to be made.</Description>
			<LinkList>
				<Link target="_blank" rel="noopener" href="https://shawnhoffman.dev/">
					Resume 🥴
				</Link>
				<Link target="_blank" rel="noopener" href="https://github.com/shawnphoffman/">
					GitHub
				</Link>
				<Link target="_blank" rel="noopener" href="https://spoilersarelame.com/?t=uryyb,%20ivfvgbe!">
					Spoilers are Lame 👎
				</Link>
				<Link target="_blank" rel="noopener" href="https://blueharvest.rocks/">
					Blue Harvest Rocks
				</Link>
				<Link target="_blank" rel="noopener" href="https://dyson-sphere-planner.com/">
					Dyson Sphere Planner
				</Link>
				<Link target="_blank" rel="noopener" href="https://satisfactory-notebook.com/">
					Satisfactory Notebook
				</Link>
				<Link target="_blank" rel="noopener" href="https://swc.events/">
					Celebration 2022 Calendar
				</Link>
			</LinkList>
		</AppWrapper>
	)
}

const Description = styled.div`
	margin: 0px 8px 16px 8px;
	font-size: 16px;
	text-align: center;
`

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const HeadContainer = styled.div`
	width: 62px;
	height: 100px;
	margin: 16px;
`

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	font-size: 1.5rem;
`

const LinkList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Link = styled.a`
	background: #45c4b0;
	border-radius: 4px;
	color: black;
	padding: 16px 32px;
	cursor: pointer;
	margin-bottom: 16px;
	text-align: center;
	font-size: 0.8em;
	text-decoration: none;

	&:hover {
		background: #9aeba3;
	}
`

export default memo(Home)
