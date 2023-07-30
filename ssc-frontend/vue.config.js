module.exports = {
	transpileDependencies: ["@dcloudio/uni-ui"],
	devServer: {
		hot: true,
		clientLogLevel: "warning",
		overlay: {
			warnings: false,
			errors: false,
		},
		proxy: {
			"/web-api": {
				target:"http://api.epli.cn",
				changeOrigin: true,
				ws: false,
				secure: false,
				// pathRewrite: {
				// 	"^/web-api": "",
				// },
			},
		},
	},
};
