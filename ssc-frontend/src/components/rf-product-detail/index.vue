<template>
	<view class="rf-product-detail">
		<!--顶部返回按钮-->
		<!--#ifdef MP-WEIXIN-->
		<text class="back-btn iconfont iconzuo" @tap="navBack"></text>
		<!--#endif-->
		<!--header-->
		<view class="detail" v-if="product.name">
			<!--顶部商品轮播图-->
			<view class="carousel">
				<swiper
					indicator-dots
					circular="true"
					duration="400"
					controls
					touchable
				>
					<!--#ifdef APP-PLUS-->
					<swiper-item class="swiper-item" v-if="product.video_url">
						<video
							muted
							:poster="product.covers[0]"
							object-fit="contain"
							:src="product.video_url"
						></video>
					</swiper-item>
					<!--#endif-->
					<swiper-item
						class="swiper-item"
						v-for="(item, index) in product.covers"
						:key="index"
					>
						<view class="image-wrapper">
							<image :src="item" class="loaded" mode="aspectFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!--商品信息-->
			<view class="introduce-section">
				<view class="introduce-second-line">
					<view class="title">
						<text>{{ product.name }}</text>
					</view>
				</view>
			</view>
			<!--商品参数-->
			<view class="c-list">
				<rf-item-popup title="作者">
					<view slot="content">
						<text class="con t-r">王一二</text>
					</view>
					<!-- <view slot="right"
						><text class="iconfont iconyou"></text
					></view> -->
				</rf-item-popup>
				<rf-item-popup title="质地">
					<view slot="content">
						<text class="con t-r">未知</text>
					</view>
					<!-- <view slot="right"
						><text class="iconfont iconyou"></text
					></view> -->
				</rf-item-popup>
			</view>

			<!--底部商品详情-->
			<view class="detail-desc">
				<view class="d-header">
					<text>商品详情</text>
				</view>
				<rf-parser :html="product.intro" lazy-load></rf-parser>
			</view>
			<!-- 底部操作菜单 -->
			<view class="page-bottom">
				<view class="page-bottom-bth-wrapper">
					<view @tap="zhuanrangShow = true" class="p-b-btn">
						<text>转让</text>
					</view>
				</view>
			</view>
		</view>
		<view
			class="popup spec show"
			v-if="zhuanrangShow"
			@touchmove.stop.prevent="stopPrevent"
			@tap="hide"
		>
			<!-- 遮罩层 -->
			<view class="mask input-content-mask" @tap="hide"></view>
			<view class="input-content-warp" @tap.stop="stopPrevent">
				<view class="input-content">
					<view class="input-content-body">
						<view class="input-item">
							<text class="tit">手机号码</text>
							<input
								type="number"
								name="mobile"
								v-model="verParams.mobile"
								placeholder="请输入手机号码"
								maxlength="11"
								@blur="blurMobileChange"
							/>
						</view>
						<view class="input-item" v-if="verByPass">
							<text class="tit">密码</text>
							<input
								name="password"
								type="password"
								v-model="verParams.password"
								placeholder="请输入密码"
								maxlength="20"
							/>
						</view>

						<view class="input-item input-item-sms-code" v-if="!verByPass">
							<view class="input-wrapper">
								<view class="rf-input-wrapper">
									<view class="tit">验证码</view>
									<input
										type="number"
										v-model="verParams.code"
										placeholder="请输入验证码"
										maxlength="4"
										data-key="mobile"
									/>
								</view>
								<button
									class="sms-code-btn"
									:disabled="smsCodeBtnDisabled"
									@tap.stop="getSmsCode"
								>
									<text v-if="!smsCodeBtnDisabled">获取验证码</text>
									<text v-else class="sms-code-resend">{{
										`重新发送 (${codeSeconds})`
									}}</text>
								</button>
							</view>
						</view>
						<button
							class="confirm-btn"
							:class="'bg-' + themeColor.name"
							:disabled="verLoading"
							:loading="verLoading"
							@tap="toSubmit"
						>
							提交
						</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import rfItemPopup from "@/components/rf-item-popup";
import { verBySmsCode, verByPass } from "@/api/product";
import { smsCode } from "@/api/login";
import moment from "@/common/moment";
export default {
	name: "rfProductDetail",
	props: {
		product: {
			type: Object,
			default() {
				return {};
			},
		},
		userInfo: {
			type: Object,
			default() {
				return {};
			},
		},
		url: {
			type: String,
			default: "",
		},
	},
	components: {
		rfItemPopup,
	},
	data() {
		return {
			verParams: {
				mobile: "",
				code: "",
				password: "",
			},
			verLoading: false,
			reqBody: {},
			codeSeconds: this.$mConstDataConfig.sendCodeTime, // 验证码发送时间间隔
			verByPass: false,
			smsCodeBtnDisabled: false,
			zhuanrangShow: false,
			hasLogin: this.$mStore.getters.hasLogin,
			loading: true,
			errorInfo: "",
		};
	},

	computed: {},
	methods: {
		// 发送验证码并进入倒计时
		async getSmsCode() {
			this.reqBody["mobile"] = this.verParams["mobile"];
			let checkSendCode = this.$mGraceChecker.check(
				this.reqBody,
				this.$mFormRule.sendCodeRule
			);
			if (!checkSendCode) {
				this.$mHelper.toast(this.$mGraceChecker.error);
				return;
			}
			await this.$http
				.post(smsCode, {
					mobile: this.reqBody["mobile"],
				})
				.then((r) => {
					if (r.data) {
						this.$mHelper.toast(`验证码发送成功, 验证码是${r.data}`);
					} else {
						this.$mHelper.toast("验证码已发送.");
					}
					this.smsCodeBtnDisabled = true;
					this.handleSmsCodeTime(59);
				});
		},
		handleSmsCodeTime(time) {
			let timer = setInterval(() => {
				if (time === 0) {
					clearInterval(timer);
					this.smsCodeBtnDisabled = false;
				} else {
					this.codeSeconds = time;
					this.smsCodeBtnDisabled = true;
					time--;
				}
			}, 1000);
		},
		// 失去焦点的手机号
		blurMobileChange(e) {},
		// 提交表单
		async toSubmit() {
			this.reqBody["mobile"] = this.verParams["mobile"];
			let cheRes, verApi;
			if (this.verByPass) {
				verApi = verByPass;
				this.reqBody["password"] = this.verParams["password"];
				cheRes = this.$mGraceChecker.check(
					this.reqBody,
					this.$mFormRule.verByPassRule
				);
			} else {
				this.reqBody["code"] = this.verParams["code"];
				verApi = verBySmsCode;
				cheRes = this.$mGraceChecker.check(
					this.reqBody,
					this.$mFormRule.verByCodeRule
				);
			}
			if (!cheRes) {
				this.$mHelper.toast(this.$mGraceChecker.error);
				return;
			}
			this.reqBody.group = this.$mHelper.platformGroupFilter();
			this.handleLogin(this.reqBody, verApi);
		},
		async handleLogin(params, verApi) {
			this.verLoading = true;
			await this.$http
				.post(verApi, params)
				.then((r) => {
					this.$mHelper.toast("操作成功！");
				})
				.catch(() => {
					this.verLoading = false;
				});
		},
		// 返回上一页
		navBack() {
			this.$mRouter.back();
		},
		hide() {
			this.zhuanrangShow = false;
		},

		// 通用跳转
		navTo(route) {
			if (!this.hasLogin) {
				this.$mHelper.backToLogin();
			} else {
				this.$mRouter.push({ route });
			}
		},

		stopPrevent() {},
	},
};
</script>
<style lang="scss">
.rf-product-detail {
	.back-btn {
		position: fixed;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: $font-color-dark;
	}
	.carousel {
		height: 722upx;
		position: relative;
		swiper {
			height: 100%;
		}
		.image-wrapper {
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			border-bottom: 1upx solid rgba(0, 0, 0, 0.01);
			image {
				width: 100%;
				height: 100%;
			}
			.content {
				position: absolute;
				right: $spacing-base;
				bottom: $spacing-base;
			}
		}
	}
	.zhuanrangShow {
		padding-bottom: 60upx;
	}

	.c-list {
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;
		.tit {
			width: 140upx;
		}
		.con {
			flex: 1;
			color: $font-color-dark;
			.selected-text {
				margin-right: 10upx;
			}
		}
		.red {
			color: $uni-color-primary;
		}
	}
	.input-content-warp {
		z-index: 9;
	}
	.input-content-mask {
	}
	.input-content {
		padding: 0 60upx;
		.input-content-body {
			padding: 60upx;
			background: #fff;
		}
	}
	.input-item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 30upx;
		background: $page-color-light;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 50upx;

		&:last-child {
			margin-bottom: 0;
		}

		.tit {
			height: 50upx;
			line-height: 56upx;
			font-size: $font-sm + 2upx;
			color: $font-color-base;
		}

		input {
			height: 60upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}
	}
	.input-item-sms-code {
		position: relative;
		width: 100%;
		.sms-code-btn {
			position: absolute;
			color: #111;
			right: 20upx;
			bottom: 20upx;
			font-size: 28upx;
		}

		.sms-code-resend {
			color: #999;
		}

		.sms-code-btn:after {
			border: none;
			background-color: transparent;
		}
	}
	.spec {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
