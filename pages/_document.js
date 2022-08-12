import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,300&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890%2F-%3A()%2C.%3B%26&display=swap"
					rel="stylesheet"
				></link>
				<link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&text=Shawn%20Hoffman&display=swap" rel="stylesheet" />
				<script async src="https://kit.fontawesome.com/94ef14ccff.js" crossOrigin="anonymous"></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
