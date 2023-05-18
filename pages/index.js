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
				<SocialIcon rel="me" href="https://discord.com/users/279373835978014721" target="_blank">
					<i className="fa-brands fa-discord" />
				</SocialIcon>
				<SocialIcon rel="me" href="https://mastodon.social/@ice_planet_hoff" target="_blank">
					<i className="fa-brands fa-mastodon" />
				</SocialIcon>
				<SocialIcon rel="me" href="https://linkedin.com/in/shawnphoffman" target="_blank">
					<i className="fa-brands fa-linkedin" />
				</SocialIcon>
				<SocialIcon rel="me" href="https://github.com/shawnphoffman/" target="_blank">
					<i className="fa-brands fa-github" />
				</SocialIcon>
			</SocialLinks>
			<LinkList>
				<Link target="_blank" rel="noopener" href="https://blog.shawn.party/">
					Blog
				</Link>
				<Link target="_blank" rel="noopener" href="https://shawnhoffman.dev/">
					Resume
				</Link>
				<Link target="_blank" rel="noopener" href="https://spoilersarelame.com/?t=uryyb,%20ivfvgbe!">
					Spoilers are Lame
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
					Star Wars Celebration Companion
				</Link>
				<Link target="_blank" rel="noopener" href="https://obs.shawn.party/">
					OBS/Stream Helpers
				</Link>
			</LinkList>
		</AppWrapper>
	)
}
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
	flex-wrap: wrap;
	justify-content: center;

	@media (max-width: 715px) {
		margin-top: 8px;
		margin-bottom: 8px;
	}
`
const SocialIcon = styled.a`
	font-size: 36px;
	margin: 32px;

	@media (max-width: 715px) {
		margin-bottom: 8px;
		margin-top: 8px;
	}
`

export default memo(Home)
