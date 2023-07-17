import 'styles/globals.css'

import localFont from 'next/font/local'
import Script from 'next/script'

const fontRegular = localFont({
	src: './fonts/BerkeleyMonoVariable-Regular.woff2',
})

export const metadata = {
	title: 'S̴̳̐h̵̝̉â̸̰w̴͉̐n̸̺̿ ̴͈̓H̸̭̕o̶̭̅f̴̬͝f̵̹̿m̴͙̃a̵̼̚n̷̟̅',
	metadataBase: 'https://shawn.party',
	openGraph: {
		title: 'S̴̳̐h̵̝̉â̸̰w̴͉̐n̸̺̿ ̴͈̓H̸̭̕o̶̭̅f̴̬͝f̵̹̿m̴͙̃a̵̼̚n̷̟̅',
		url: 'https://shawn.party',
		locale: 'en_US',
		type: 'website',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={fontRegular.className}>
			<head>
				<Script src="https://kit.fontawesome.com/94ef14ccff.js" strategy="afterInteractive" rel="preload" as="font" />
			</head>
			<body>
				<div>{children}</div>
			</body>
		</html>
	)
}