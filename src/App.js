import { memo } from 'react'
import { styled } from 'linaria/react'

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
			<h1>Shawn Hoffman</h1>
			<LinkList>
				<Link target="_blank" rel="noopener" href="/resume">
					Resume
				</Link>
				<Link target="_blank" rel="noopener" href="https://github.com/shawnphoffman/">
					GitHub
				</Link>
				<Link target="_blank" rel="noopener" href="https://dyson-sphere-planner.com/">
					Dyson Sphere Planner
				</Link>
				<Link target="_blank" rel="noopener" href="https://satisfactory-notebook.com/">
					Satisfactory Notebook
				</Link>
				<Link target="_blank" rel="noopener" href="https://applauseforhawes.com/">
					Applause for Hawes
				</Link>
				<Link target="_blank" rel="noopener" href="https://shawnphoffman.com/celebration-calendar/">
					Celebration 2022 Calendar
				</Link>
			</LinkList>
		</AppWrapper>
	)
}

export default memo(App)
