module.exports = {
	transpileDependencies: ["@dcloudio/uni-ui"],
	devServer: {
		hot: true,
		clientLogLevel: "warning",
		overlay: {
			warnings: false,
			errors: false,
		},
	},
};
