// 密码注册
const registerByPass = '/user/register';

// 密码登录
const loginByPass = '/user/login';

// 微信授权登录
const wechatH5Login = '/third-party/wechat';

// 微信小程序授权登录
const mpWechatLogin = '/third-party/wechat-mp';

// App微信授权登录
const thirdPartyWechatOpenPlatform = '/third-party/wechat-open-platform';

// 密码重置
const updatePassword = '/user/up-pwd';

// 第三方绑定
const authLogin = '/member/auth/create';

// 查询绑定状态
const isBindingCheck = '/member/auth/is-binding';

// 手机号登录
const loginBySmsCode = '/user/mobile-login';

// 获取手机验证码
const smsCode = '/sms-code';

// 退出登录
const logout = '/user/logout';

// 刷新token
const refreshToken = '/user/refresh';

// 登录令牌有效性检测
const verifyAccessToken = '/user/verify-access-token';

export {
	registerByPass,
	loginByPass,
	isBindingCheck,
	wechatH5Login,
	mpWechatLogin,
	thirdPartyWechatOpenPlatform,
	authLogin,
	updatePassword,
	smsCode,
	loginBySmsCode,
	logout,
	refreshToken,
	verifyAccessToken
};
