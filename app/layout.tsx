import 'styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { ReactNode } from 'react'

import { DM_Sans } from 'next/font/google'

const dmSan = DM_Sans({ subsets: ['latin'], display: 'swap', preload: true })

export const metadata = {
	title: 'S̴̳̐h̵̝̉â̸̰w̴͉̐n̸̺̿ ̴͈̓H̸̭̕o̶̭̅f̴̬͝f̵̹̿m̴͙̃a̵̼̚n̷̟̅',
	description: 'A landing page for me, Shawn.',
	metadataBase: 'https://shawn.party',
	openGraph: {
		title: 'S̴̳̐h̵̝̉â̸̰w̴͉̐n̸̺̿ ̴͈̓H̸̭̕o̶̭̅f̴̬͝f̵̹̿m̴͙̃a̵̼̚n̷̟̅',
		description: 'A landing page for me, Shawn.',
		url: 'https://shawn.party',
		locale: 'en_US',
		type: 'website',
	},
}

interface RootLayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={`${dmSan.className} bg-zinc-900 text-white`}>
			<body className="p-6 pr-5 xs:p-6 sm:p-10 h-fit">
				<main className="bg-bg2 w-full max-w-5xl mx-auto outline-zinc-950 rounded-lg shadow-big outline-solid outline-4 sm:p-10 p-6 bg-[radial-gradient(rgba(128,128,128,0.5)_1px,transparent_1px)] bg-size-[16px_16px]">
					{children}
				</main>
				{/* <Analytics /> */}
			</body>
		</html>
	)
}
