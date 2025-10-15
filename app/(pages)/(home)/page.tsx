import Image from 'next/image'

import head from './head.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBluesky, faDiscord, faGithub, faInstagram, faLinkedin } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/brands'

const linkClasses = 'drop-shadow-sm hover:drop-shadow-md hover:scale-110 transition-all duration-300 hover:text-c1'
const textClasses = `text-4xl ${linkClasses}`
const iconClasses = `text-5xl ${linkClasses}`

function Home() {
	return (
		<div className="flex flex-col gap-12">
			<div className={'flex flex-row gap-8 w-full'}>
				<Image
					className="min-w-0 object-scale-down max-h-32 w-fit sm:max-h-44 md:max-h-60 hidden xs:block drop-shadow-big"
					width={158}
					src={head}
					alt="Illustration of my goofy face"
				/>
				<h1 className="font-black tracking-tight text-6xl xs:text-7xl sm:text-8xl md:text-9xl w-full text-shadow-big md:max-w-2xl">
					<div className="text-left">Shawn</div>
					<div className="text-right">Hoffman</div>
				</h1>
			</div>
			<div className="text-xl text-center">I removed the witty tagline in favor of simplicity.</div>
			<div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-4">
				<Link className={iconClasses} href="https://bsky.app/profile/shawn.justshillin.com" target="_blank" title="Bluekky">
					<FontAwesomeIcon icon={faBluesky} />
				</Link>
				<Link className={iconClasses} rel="me" href="https://linkedin.com/in/shawnphoffman" target="_blank" title="LinkedIn">
					<FontAwesomeIcon icon={faLinkedin} />
				</Link>
				<Link className={iconClasses} rel="me" href="https://github.com/shawnphoffman/" target="_blank" title="GitHub">
					<FontAwesomeIcon icon={faGithub} />
				</Link>
				<Link className={iconClasses} href="https://instagram.com/shawnphoffman" target="_blank" title="Instagram">
					<FontAwesomeIcon icon={faInstagram} />
				</Link>
				<Link className={iconClasses} rel="me" href="https://discord.com/users/279373835978014721" target="_blank" title="Discord">
					<FontAwesomeIcon icon={faDiscord} />
				</Link>
			</div>
			<div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
				<Link className={textClasses} target="_blank" href="https://blog.shawn.party/">
					Blog
				</Link>
				<Link className={textClasses} target="_blank" href="https://shawnhoffman.dev/">
					Résumé
				</Link>
				{/* https://cake.avris.it/rC0 */}
				{/* https://en.pronouns.page/@shawn.party */}
			</div>
		</div>
	)
}

export default Home
