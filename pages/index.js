import { memo } from 'react'
import { styled } from 'linaria/react'
import Image from 'next/image'
import head from 'public/images/head.png'

const Home = () => {
	return (
		<AppWrapper>
			<Header>
				<HeadContainer>
					{/* <Image height={100} width={62} layout="fixed" src={head} alt="Illustration of my goofy face" /> */}
					<Image height={50} width={31} layout="fixed" src={head} alt="Illustration of my goofy face" />
				</HeadContainer>
				<h1>Shawn Hoffman</h1>
			</Header>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			<Description>I make websites that don't really need to be made.</Description>
			<SocialLinks>
				<SocialIcon href="https://twitter.com/iceplanethoff" target="_blank" rel="noopener">
					<i className="fa-brands fa-twitter" />
				</SocialIcon>
				<SocialIcon href="https://instagram.com/shawnphoffman" target="_blank" rel="noopener">
					<i className="fa-brands fa-instagram" />
				</SocialIcon>
				<SocialIcon href="https://twitch.tv/ice_planet_hoff" target="_blank" rel="noopener">
					<i className="fa-brands fa-twitch" />
				</SocialIcon>
			</SocialLinks>
			<LinkList>
				<Link target="_blank" rel="noopener" href="https://blog.shawn.party/">
					<>Blog</>
					{/* <Icon className="fa-solid fa-thought-bubble" /> */}
				</Link>
				<Link target="_blank" rel="noopener" href="https://github.com/shawnphoffman/">
					<>GitHub</>
					{/* <Icon className="fa-brands fa-github" /> */}
				</Link>
				<Link target="_blank" rel="noopener" href="https://spoilersarelame.com/?t=uryyb,%20ivfvgbe!">
					<>Spoilers are Lame</>
					{/* <Icon className="fa-solid fa-thumbs-down" /> */}
				</Link>
				<Link target="_blank" rel="noopener" href="https://blueharvest.rocks/">
					<>Blue Harvest Rocks</>
					{/* <Icon className="fa-solid fa-space-station-moon-construction" /> */}
				</Link>
				<Link target="_blank" rel="noopener" href="https://dyson-sphere-planner.com/">
					<>Dyson Sphere Planner</>
					{/* <Icon className="fak fa-dyson-sphere-program" /> */}
				</Link>
				<Link target="_blank" rel="noopener" href="https://satisfactory-notebook.com/">
					<>Satisfactory Notebook</>
					{/* <Icon className="fak fa-satisfactory" /> */}
				</Link>
				<Link target="_blank" rel="noopener" href="https://swc.events/">
					<>Celebration 2022 Calendar</>
					{/* <Icon className="fa-solid fa-calendar-range" /> */}
				</Link>
				<Link target="_blank" rel="noopener" href="https://shawnhoffman.dev/">
					<>Resume (Outdated)</>
					{/* <Icon className="fa-solid fa-briefcase-blank" /> */}
				</Link>
			</LinkList>
		</AppWrapper>
	)
}

const Icon = styled.i`
	margin-left: 8px;
`
const Description = styled.div`
	margin: 0px 8px 0px 8px;
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
	/* width: 62px; */
	/* height: 100px; */
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
	/* align-items: center; */
	align-items: stretch;
`
const Link = styled.a`
	background: #45c4b0;
	border-radius: 4px;
	color: #012030;
	padding: 16px 32px;
	cursor: pointer;
	margin-bottom: 16px;
	text-align: center;
	font-size: 0.8em;
	text-decoration: none;

	&:hover {
		background: #9aeba3;
		color: #012030;
	}
`
const SocialLinks = styled.div`
	display: flex;
	flex-direction: row;
`
const SocialIcon = styled.a`
	font-size: 36px;
	margin: 32px;
`

export default memo(Home)
