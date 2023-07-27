import $mAssetsPath from './assets.config';
import $mConstData from './constData.config';
class Setting {
	constructor(
		appName,
		appLogo,
		appAgreementDefaultSelect,
		styleLoadingIsOpen,
		styleLoadingType,
		styleUserIsOpen,
		styleType,
		closeLogin,
		closeRegister,
		closeThirdPartyLogin,
		closeSiteDate,
		closeSiteExplain,
		styleLoginType,
		closeRegisterPromoCode
	) {
		this._appName = appName; // 应用名称
		this._appLogo = appLogo; // 应用Logo
		this._appAgreementDefaultSelect = appAgreementDefaultSelect; // 协议默认选中
		this._styleLoadingIsOpen = styleLoadingIsOpen; // 开启加载
		this._styleLoadingType = styleLoadingType; // 用户可否自定义风格
		this._styleUserIsOpen = styleUserIsOpen; // 加载类型
		this._styleType = styleType; // 加载类型
		this._closeLogin = closeLogin; // 关闭登录
		this._closeRegister = closeRegister; // 关闭注册
		this._closeThirdPartyLogin = closeThirdPartyLogin; // 关闭第三方授权登录
		this._closeSiteExplain = closeSiteExplain; // 关闭站点说明
		this._closeSiteDate = closeSiteDate; // 关闭站点时间
		this._styleLoginType = styleLoginType; // 登录注册页面风格
		this._closeRegisterPromoCode = closeRegisterPromoCode; // 关闭注册激活码输入框
	}


	get closeRegisterPromoCode() {
		return this._closeRegisterPromoCode;
	}

	set closeRegisterPromoCode(value) {
		this._closeRegisterPromoCode = value;
	}

	get closeSiteDate() {
		return this._closeSiteDate;
	}

	set closeSiteDate(value) {
		this._closeSiteDate = value;
	}

	get closeSiteExplain() {
		return this._closeSiteExplain;
	}

	set closeSiteExplain(value) {
		this._closeSiteExplain = value;
	}

	get styleCateType() {
		return this._styleCateType;
	}


	get styleLoginType() {
		return this._styleLoginType;
	}

	set styleLoginType(value) {
		this._styleLoginType = value;
	}

	get closeLogin() {
		return this._closeLogin;
	}

	set closeLogin(value) {
		this._closeLogin = value;
	}

	get closeRegister() {
		return this._closeRegister;
	}

	set closeRegister(value) {
		this._closeRegister = value;
	}


	get closeThirdPartyLogin() {
		return this._closeThirdPartyLogin;
	}

	set closeThirdPartyLogin(value) {
		this._closeThirdPartyLogin = value;
	}

	get styleUserIsOpen() {
		return this._styleUserIsOpen;
	}

	set styleUserIsOpen(value) {
		this._styleUserIsOpen = value;
	}

	get styleType() {
		return this._styleType;
	}

	set styleType(value) {
		this._styleType = value;
	}

	get appName() {
		return this._appName;
	}

	set appName(value) {
		this._appName = value;
	}

	get appLogo() {
		return this._appLogo;
	}

	set appLogo(value) {
		this._appLogo = value;
	}

	get appAgreementDefaultSelect() {
		return this._appAgreementDefaultSelect;
	}

	set appAgreementDefaultSelect(value) {
		this._appAgreementDefaultSelect = value;
	}

	get styleLoadingIsOpen() {
		return this._styleLoadingIsOpen;
	}

	set styleLoadingIsOpen(value) {
		this._styleLoadingIsOpen = value;
	}

	get styleLoadingType() {
		return this._styleLoadingType;
	}

	set styleLoadingType(value) {
		this._styleLoadingType = value;
	}

}
export default new Setting(
	$mConstData.appName, // 应用名称
	$mAssetsPath.logo, // 应用logo
	true, // 是否默认选中协议
	true, // 是否开启loading 加载
	"rotatePlane", // loading 加载风格
	true,
	"green", // 商城主题
	false, // 关闭登录入口
	false, // 关闭注册入口
	false, // 关闭第三方登录
	"", // 关闭站点时间
	"商城正在维护中...", // 关闭站点描述
	"two", // one 登录风格一 one 登录风格二
	true // 关闭注册激活码输入框
);
