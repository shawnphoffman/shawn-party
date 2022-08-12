import { memo } from 'react'
import { styled } from 'linaria/react'

import head from './head@3x.png'

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

const Head = styled.img`
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

function App() {
	return (
		<AppWrapper>
			<Header>
				<Head src={head} alt="Illustration of my goofy face" />
				<h1>Shawn Hoffman</h1>
			</Header>
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
				<Link target="_blank" rel="noopener" href="https://shawnphoffman.com/celebration-calendar/">
					Celebration 2022 Calendar
				</Link>
			</LinkList>
		</AppWrapper>
	)
}

export default memo(App)
