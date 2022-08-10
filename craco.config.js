const { loaderByName, getLoader } = require('@craco/craco')
const transformBabelLoader = require('./config/transformBabelLoader')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default

module.exports = {
	webpack: {
		configure: webpackConfig => {
			const lm = getLoader(webpackConfig, loaderByName('babel-loader'))
			const loader = lm.match.loader
			webpackConfig.module.rules[1].oneOf[2] = transformBabelLoader(loader)

			// Inline main.css
			webpackConfig.plugins.push(
				new HTMLInlineCSSWebpackPlugin({
					leaveCSSFile: true,
					// 	filter: filename => filename.includes('main'),
				})
			)

			return webpackConfig
		},
	},
	jest: {
		configure: jestConfig => {
			return jestConfig
		},
	},
}
