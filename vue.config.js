const path = require('path')

// 拼接路径
function resolve(dir) {
	return path.join(__dirname, dir)
}

// 基础路径
const baseUrl = process.env.VUE_APP_API_ROOT;

module.exports = {
	baseUrl, // 根据你的实际情况更改这里
	lintOnSave: false,
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.json', '.vue'],
		},
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
	}
};
