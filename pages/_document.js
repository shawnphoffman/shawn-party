import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html>
			<Head>
				{/* FontAwesome Icons */}
				<Script src="https://kit.fontawesome.com/94ef14ccff.js" strategy="afterInteractive" crossOrigin="anonymous" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
