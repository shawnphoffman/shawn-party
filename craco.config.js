const { loaderByName, getLoader } = require('@craco/craco')
const transformBabelLoader = require('./config/transformBabelLoader')

module.exports = {
	webpack: {
		configure: webpackConfig => {
			const lm = getLoader(webpackConfig, loaderByName('babel-loader'))
			const loader = lm.match.loader
			webpackConfig.module.rules[1].oneOf[2] = transformBabelLoader(loader)
			return webpackConfig
		},
	},
	jest: {
		configure: jestConfig => {
			return jestConfig
		},
	},
}
