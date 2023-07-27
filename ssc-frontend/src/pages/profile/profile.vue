<template>
	<view class="user">
		<!--头部-->
		<view class="user-section" :class="'bg-' + themeColor.name">
			<image class="bg" :src="userBg"></image>
			<!--用户信息-->
			<view class="user-info-box">
				<view
					class="portrait-box"
					@tap="navTo(userInfo ? '/pages/user/userinfo/userinfo' : 'login')"
				>
					<image
						class="portrait"
						:src="userInfo.head_portrait || headImg"
					></image>
					<text class="username">
						{{ userInfo.nickname || userInfo.realname || "登录/注册" }}
					</text>
				</view>
			</view>
		</view>
		<!-- 个人中心 内容区-->
		<view
			class="cover-container"
			:style="[
				{
					transform: coverTransform,
					transition: coverTransition,
				},
			]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>
			<image class="arc" :src="arc"></image>
			<view class="promotion-center">
				<list-cell
					icon="iconqianbao"
					:iconColor="themeColor.color"
					@eventClick="navTo('/pages/user/account/account')"
					:title="_i18n.t('profile.myAccount')"
				></list-cell>
				<view class="tj-sction">
					<view
						class="tj-item"
						v-for="item in amountList"
						:key="item.title"
						@tap="navTo(item.url)"
					>
						<text
							class="num"
							:class="item.value > 0 ? 'text-' + themeColor.name : ''"
						>
							{{ item.value }}
						</text>
						<text>{{ item.title }}</text>
					</view>
				</view>
			</view>
		</view>
		<!--页面加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script>
/**
 * @des 个人中心
 *
 * @author stav stavyan@qq.com
 * @date 2020-01-10 11:41
 * @copyright 2019
 */
import {  memberInfo } from "@/api/userInfo";
import listCell from "@/components/rf-list-cell";
import { mapMutations } from "vuex";
let startY = 0,
	moveY = 0,
	pageAtTop = true;
export default {
	components: {
		listCell,
	},
	data() {
		return {
			amountList: this.$mConstDataConfig.amountList,
			headImg: this.$mAssetsPath.headImg,
			arc: this.$mAssetsPath.arc,
			userBg: this.$mAssetsPath.userBg,
			coverTransform: "translateY(0px)",
			coverTransition: "0s",
			moving: false,
			userInfo: {
				// 用户信息
				promoter: null, 
			},
			loading: true,
			appName: this.$mSettingConfig.appName,
			hasLogin: false,
			currentLanguage: this._i18n.locale === "zh" ? "English" : "中文",
		};
	},
	
	computed: {},
	// 小程序分享
	onShareAppMessage() {
		return {
			title: ``,
			path: "/pages/index/index",
		};
	},
	async onShow() {
		// 初始化数据
		await this.initData();
	},

	methods: {
		// 分享
		share() {
			const url = `${this.$mConfig.hostUrl}/pages/index/index`;
			// #ifdef H5
			this.$mHelper.h5Copy(url);
			// #endif
			// #ifdef APP-PLUS
			const shareImg = `${this.$mSettingConfig.appLogo}`;
			this.$mHelper.handleAppShare(
				url,
				this.appName,
				``,
				shareImg
			);
			// #endif
		},
		...mapMutations(["login"]),
		// 数据初始化
		async initData() {
			this.hasLogin = this.$mStore.getters.hasLogin;
			uni.setTabBarStyle({
				selectedColor: this.themeColor.color,
				borderStyle: "white",
			});
			this.themeColor.tabList &&
				this.themeColor.tabList.forEach((selectedIconPath, index) => {
					uni.setTabBarItem({
						index,
						selectedIconPath,
					});
				});
			if (this.hasLogin) {
				await this.getMemberInfo();
			} else {
				this.loading = false;
			}
		},
		// 获取用户信息
		async getMemberInfo() {
			await this.$http
				.get(memberInfo)
				.then(async (r) => {
					this.loading = false;
					this.userInfo = r.data;
				})
				.catch(() => {
					this.hasLogin = false;
					this.userInfo = {};
					this.loading = false;
				});
		},

		// 统一跳转接口,拦截未登录路由
		navTo(route) {
			if (!route) return;
			if (!this.hasLogin) {
				uni.removeStorageSync("backToPage");
				this.$mRouter.push({ route: "/pages/public/logintype" });
			} else {
				this.$mRouter.push({ route });
			}
		},
		/**
		 *  会员卡下拉和回弹
		 *  1.关闭bounce避免ios端下拉冲突
		 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
		 *    transition设置0.1秒延迟，让css来过渡这段空窗期
		 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
		 */
		coverTouchstart(e) {
			if (pageAtTop === false) {
				return;
			}
			this.coverTransition = "transform .1s linear";
			startY = e.touches[0].clientY;
		},
		coverTouchmove(e) {
			moveY = e.touches[0].clientY;
			let moveDistance = moveY - startY;
			if (moveDistance < 0) {
				this.moving = false;
				return;
			}
			this.moving = true;
			if (moveDistance >= 80 && moveDistance < 100) {
				moveDistance = 80;
			}
			if (moveDistance > 0 && moveDistance <= 80) {
				this.coverTransform = `translateY(${moveDistance}px)`;
			}
		},
		coverTouchend() {
			if (this.moving === false) {
				return;
			}
			this.moving = false;
			this.coverTransition = "transform 0.3s cubic-bezier(.21,1.93,.53,.64)";
			this.coverTransform = "translateY(0px)";
		},

	},
};
</script>
<style lang="scss" scoped>
page {
	background-color: $page-color-base;
}
.user {
	.user-section {
		height: 520upx;
		padding: 100upx 30upx 0;
		position: relative;

		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100vw;
			height: 60vw;
			opacity: 0.84;
		}
		.user-info-box {
			height: 180upx;
			display: flex;
			align-items: center;
			position: relative;
			z-index: 1;
			justify-content: space-between;

			.portrait-box {
				display: flex;
				align-items: center;

				.portrait {
					width: 130upx;
					height: 130upx;
					border: 5upx solid #fff;
					border-radius: 50%;
				}

				.username {
					font-size: $font-lg + 6upx;
					color: $color-white;
					margin-left: 20upx;
				}

				button {
					background-color: transparent;
					font-size: $font-lg + 6upx;
					color: $font-color-dark;
					border: none;
				}

				button::after {
					border: none;
				}
			}
		}
	}

	.cover-container {
		margin-top: -136upx;
		padding: 0 30upx 20upx;
		position: relative;
		background-color: $page-color-base;

		.arc {
			position: absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}

		.promotion-center {
			background: #fff;
			margin-bottom: 20upx;
		}

		.tj-sction {
			@extend %section;
			display: flex;

			.tj-item {
				@extend %flex-center;
				flex: 1;
				flex-direction: column;
				margin: 30upx 0;
				font-size: $font-sm;
				color: #75787d;
				/*border-right: 2upx solid rgba(0, 0, 0, 0.2);*/
			}

			/*.tj-item:last-child {*/
			/*border-right: none;*/
			/*}*/
			.num {
				font-size: $font-base;
			}

			.red {
				color: $base-color;
			}
		}

	}
}
%flex-center {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
%section {
	justify-content: space-around;
	display: flex;
	align-content: center;
	background: #fff;
	border-radius: 10upx;
}
</style>
