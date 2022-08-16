import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html>
			<Head>
				{/* Normalize */}
				<Script src="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" defer />

				{/* Google Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,300&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890%2F-%3A()%2C.%3B%26&display=swap"
					rel="stylesheet"
				></link>
				<link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&text=Shawn%20Hoffman&display=swap" rel="stylesheet" />

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
