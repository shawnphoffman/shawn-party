import { memo } from 'react'
import Image from 'next/image'

import head from './head.png'
import styles from './Page.module.css'

const Home = ({}) => {
	return (
		<div className={styles.appWrapper}>
			<div className={styles.header}>
				<div className={styles.headContainer}>
					<Image height={50} width={31} src={head} alt="Illustration of my goofy face" />
				</div>
				<h1>Shawn Hoffman</h1>
			</div>
			<div className={styles.description}>I make websites that don&apos;t really need to be made.</div>
			<div className={styles.socialLinks}>
				<a className={styles.socialIcon} rel="me" href="https://bsky.app/profile/shawn.justshillin.com" target="_blank" title="Bluekky">
					<i className="fa-solid fa-clouds" />
				</a>
				<a className={styles.socialIcon} href="https://instagram.com/shawnphoffman" target="_blank" title="Instagram" rel="noopener">
					<i className="fa-brands fa-instagram" />
				</a>
				{/* <a className={styles.socialIcon} href="https://twitch.tv/ice_planet_hoff" target="_blank" title="Twitch" rel="noopener">
					<i className="fa-brands fa-twitch" />
				</a> */}
				<a className={styles.socialIcon} rel="me" href="https://github.com/shawnphoffman/" target="_blank" title="GitHub">
					<i className="fa-brands fa-github" />
				</a>
				<a className={styles.socialIcon} rel="me" href="https://discord.com/users/279373835978014721" target="_blank" title="Discord">
					<i className="fa-brands fa-discord" />
				</a>
				<a className={styles.socialIcon} rel="me" href="https://linkedin.com/in/shawnphoffman" target="_blank" title="LinkedIn">
					<i className="fa-brands fa-linkedin" />
				</a>
				{/* <a className={styles.socialIcon} rel="me" href="https://mastodon.social/@ice_planet_hoff" target="_blank">
					<i className="fa-brands fa-mastodon" />
				</a> */}
			</div>
			<div className={styles.linkList}>
				<a className={styles.link} target="_blank" rel="noopener" href="https://blog.shawn.party/">
					Blog
				</a>
				<a className={styles.link} target="_blank" rel="noopener" href="https://shawnhoffman.dev/">
					Resume
				</a>
				<a className={styles.link} target="_blank" rel="noopener" href="https://blueharvest.rocks/">
					Blue Harvest Rocks
				</a>
				<a className={styles.link} target="_blank" rel="noopener" href="https://jammedtransmissions.com/">
					Jammed Transmissions
				</a>
				<a className={styles.link} target="_blank" rel="noopener" href="https://theblueypodcast.com/">
					The Bluey Podcast
				</a>
				<a className={styles.link} target="_blank" rel="noopener" href="https://swc.events/">
					Star Wars Celebration Companion
				</a>
				<a className={styles.link} target="_blank" rel="noopener" href="https://myweirdfoot.com/">
					High Potion Podcast
				</a>
				<a className={styles.link} target="_blank" rel="noopener" href="https://scruffypod.com/">
					Scruffy Lookin Podcasters
				</a>
				{/* <a className={styles.link} target="_blank" rel="noopener" href="https://obs.shawn.party/">
					OBS/Stream Helpers
				</a> */}
				<a className={styles.link} target="_blank" rel="noopener" href="https://satisfactory-notebook.com/">
					Satisfactory Notebook
				</a>
				<a className={styles.link} target="_blank" rel="noopener" href="https://dyson-sphere-planner.com/">
					Dyson Sphere Planner
				</a>
				<a
					className={styles.link}
					target="_blank"
					rel="noopener"
					href="https://bsky.app/profile/did:plc:q7ul4lz2j3d6qtcjzvz4rrjh/feed/shawnbot-pods"
				>
					Star Wars Feed on Bluesky
				</a>
				{/* <a className={styles.link} target="_blank" rel="noopener" href="https://spoilersarelame.com/?t=uryyb,%20ivfvgbe!">
					Spoilers are Lame
				</a> */}
				{/* https://cake.avris.it/rC0 */}
				{/* https://en.pronouns.page/@shawn.party */}
			</div>
		</div>
	)
}

export default memo(Home)
