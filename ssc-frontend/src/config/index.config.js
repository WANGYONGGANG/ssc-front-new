const CONFIG = {
	// 开发环境配置
	development: {
		assetsPath: "/static", // 静态资源路径
		baseUrl: "http://127.0.0.1:4523/m1/3065662-0-default/web-api", // 后台接口请求地址
		hostUrl: "http://127.0.0.1", // H5地址(前端运行地址)
		websocketUrl: "", // websocket服务端地址
		weixinAppId: "", // 微信公众号appid
	},
	// 生产环境配置
	production: {
		assetsPath: "/static", // 静态资源路径
		baseUrl: "https://mock.apifox.cn/m1/3065662-0-default/web-api", // 后台接口请求地址
		hostUrl: "http://127.0.0.1", // H5地址(前端运行地址)
		websocketUrl: "", // websocket服务端地址
		weixinAppId: "", // 微信公众号appid
	},
};
export default CONFIG[process.env.NODE_ENV];
