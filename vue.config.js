const path = require('path')

// 拼接路径
function resolve(dir) {
	return path.join(__dirname, dir)
}

// 基础路径
const baseUrl = process.env.VUE_APP_BASURL;

module.exports = {
	baseUrl, // 根据你的实际情况更改这里
	outputDir:process.env.VUE_APP_OUTPUTDIR,
	productionSourceMap:process.env.VUE_APP_PRODUCTIONSOURCEMAP,
	lintOnSave: false,
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.json', '.vue'],
		},
	},
	css:{
		sourceMap:process.env.VUE_APP_CSS_SOURCEMAP
	},
	// webpack 设置
	// 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
	chainWebpack: (config) => {
		// 重新设置 alias
		config.resolve.alias
		.set('@',resolve('src'))
		.set('@img',resolve('src/assets/images'))
		.set('@style',resolve('src/assets/styles'))
		.set('@module',resolve('src/store/modules'))
	},
	devServer: {
		proxy: {
		  '/api': {
			target: process.env.VUE_APP_API_ROOT,   // 需要代理去的接口地址
			changeOrigin: true,     // 跨域请求必须开启
			secure: false,                 // 不要检查证书
			pathRewrite: {
			  '^/api': ''
			},
			bypass: function (req, res, proxyOptions) { // 对于浏览器请求，你想要提供一个 HTML 页面，但是对于 API 请求则保持代理。你可以这样做
			  if (req.headers.accept.indexOf('html') !== -1) {
				console.log('Skipping proxy for browser request.')
				return './public/index.html'
			  }
			}
		  }
		}
	  }
};
