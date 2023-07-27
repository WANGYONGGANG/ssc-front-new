import indexConfig from './index.config.js';
const PATH = indexConfig.assetsPath;
/*
 * 图片静态资源表，所有图片资源路径在这统一管理，不应该写死在页面中，该数据挂载到Vue原型中。
 * 页面使用：this.$mAssetsPath.grid_1
 * CSS背景：应尽量使用:style="" 行内样式设置背景图
 * PATH说明：本地路径或者服务器路径
 *
 * 举例：<image :src="grid_1">  需要在data中映射 grid_1: this.$mAssetsPath.grid_1
 *
 * 特别注意：经测试小程序中不支持 <image :src="$mAssetsPath.grid_1"> 该用法
 */

export default {
	// 默认头像
	headImg: PATH + '/missing-face.png',

	// 出错填充图片
	errorImage: PATH + '/errorImage.jpg',

	// logo
	logo: PATH + '/logo.png',


	// 弧形背景
	arc: PATH + '/arc.png',

	// 500
	noNetWorkImg: PATH + '/noNetWork.png',

	// 404
	notFoundImg: PATH + '/notFound.png',

	// 返回顶部
	backTop: PATH + '/top.png',

	// 分享引导背景
	shareBg: PATH + '/share-bg.png',

	// 登录背景
	loginBg: PATH + '/login-bg.png',

	// 登录插画
	loginPic: PATH + '/login-pic.png',

	// 微信授权登录
	wechat: PATH + '/wechat.png',

	// 微信授权登录
	apple: PATH + '/apple.png',

	// 微信授权登录
	money: PATH + '/money.png',

	// 微信授权登录
	moneyBg: PATH + '/money-bg.png'
};
