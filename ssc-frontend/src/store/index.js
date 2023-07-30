import Vue from 'vue';
import Vuex from 'vuex';
import $mConstDataConfig from '@/config/constData.config';
import $mSettingConfig from '@/config/setting.config';

Vue.use(Vuex);
const ACCESSTOKEN = uni.getStorageSync('token') || '';
const REFERRER = uni.getStorageSync('referrer') || '';
const USER = uni.getStorageSync('user') || {};
const REFRESHTOKEN = uni.getStorageSync('refreshToken') || '';
const GLOBALCONFIG = uni.getStorageSync('globalConfig') || {};
const THEMECOLOR = uni.getStorageSync('themeColor');
const LOCALE = uni.getStorageSync('locale') || 'zh';

const store = new Vuex.Store({
	state: {
		// 用户token
		token: ACCESSTOKEN,
		// 用户信息
		userInfo: USER.member,
		// 推荐人
		referrer: REFERRER,
		// 小程序openid
		openId: '',
		// 网络状态，用于下载提醒
		networkState: 'unknown',
		globalConfig: GLOBALCONFIG,
		refreshToken: REFRESHTOKEN,
		
		themeColor: THEMECOLOR,
		// 国际化
		locale: LOCALE
	},
	getters: {
		// 国际化
		locale: state => {
			return state.locale;
		},
		// 全局配置
		themeColor: state => {
			let theme = state.themeColor;
			if (!theme) {
				theme = $mConstDataConfig.themeList.filter((item) => item.name === ($mSettingConfig.styleType || 'rf'))[0];
			}
			return theme;
		},
		// 全局配置
		globalConfig: state => {
			return state.globalConfig;
		},
		// 获取网络状态
		networkStatus: state => {
			return state.networkState;
		},
		// 判断用户是否登录
		hasLogin: state => {
			return !!state.token;
		}
	},
	mutations: {
		login(state, provider) {
			state.token = provider.token;
			state.refreshToken = provider.refresh_token;
			state.userInfo = provider;
			state.user = provider;
			uni.setStorageSync('user', provider);
			uni.setStorageSync("token", provider.token);
			uni.setStorageSync('refreshToken', provider.refresh_token);
			uni.setStorageSync('userInfo', provider);
		},
		logout(state) {
			state.token = '';
			state.refreshToken = '';
			state.userInfo = {};
			uni.removeStorageSync('token');
			uni.removeStorageSync('refreshToken');
			uni.removeStorageSync('userInfo');
		},
		setReferrer(state, referrer) {
			state.referrer = referrer;
			uni.setStorageSync('referrer', referrer);
		},
		setOpenId(state, openId) {
			state.openId = openId;
			uni.setStorageSync('openId', openId);
		},
		setNetworkState(state, provider) {
			state.networkState = provider;
		},
		setNotifyNum(state, provider) {
			state.notifyNum = provider;
			uni.setStorageSync('notifyNum', provider);
			if (parseInt(provider, 10) === 0) {
				uni.removeTabBarBadge({
					index: $mConstDataConfig.notifyIndex
				});
			} else {
				uni.setTabBarBadge({
					index: $mConstDataConfig.notifyIndex,
					text: provider.toString()
				});
			}
		},
		setGlobalConfig(state, provider) {
			state.globalConfig = provider;
			uni.setStorageSync('globalConfig', provider);
		},
	
		setThemeColor(state, val) {
			state.themeColor = val;
			uni.setStorageSync('themeColor', val);
		},
		setLocale(state, val) {
			state.locale = val;
			uni.setStorageSync('locale', val);
		}
	},
	actions: {
		globalConfigChange({ commit }, info) {
			commit('setGlobalConfig', info);
		},
		networkStateChange({ commit }, info) {
			commit('setNetworkState', info);
		},
		logout({ commit }) {
			commit('logout');
		}
	}
});

export default store;
