<template>
	<view class="about" v-if="!loading">
		<view class="shop-info " v-if="title === '注册协议'">
			<view class="about-content" v-if="detail.protocol_register">
				<rf-parser lazy-load :html="detail.protocol_register"></rf-parser>
			</view>
			<rf-empty
				:info="`暂无${title}`"
				v-if="!detail.protocol_register && !loading"
			></rf-empty>
		</view>
		<view class="shop-info" v-if="title === '隐私协议'">
			<view class="about-content" v-if="detail.protocol_privacy">
				<rf-parser lazy-load :html="detail.protocol_privacy"></rf-parser>
			</view>
			<rf-empty
				:info="`暂无${title}`"
				v-if="!detail.protocol_privacy && !loading"
			></rf-empty>
		</view>
		<view class="shop-info" v-if="title === '充值协议'">
			<view class="about-content" v-if="detail.protocol_recharge">
				<rf-parser lazy-load :html="detail.protocol_recharge"></rf-parser>
			</view>
			<rf-empty
				:info="`暂无${title}`"
				v-if="!detail.protocol_recharge && !loading"
			></rf-empty>
		</view>
		<rf-empty :info="`暂无${title}`" v-if="!detail && !loading"></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script>

import { configList } from '@/api/basic';
export default {
	data() {
		return {
			detail: {},
			title: null,
			loading: true
		};
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
		// 数据初始化
		initData(options) {
			this.title = options.title;
			uni.setNavigationBarTitle({
				title: options.title
			});
			this.getConfigList(options.field);
		},
		// 获取商城详情
		async getConfigList(field) {
			if (field.indexOf('protocol') !== -1) {
				await this.$http
					.get(`${configList}`, {
						field
					})
					.then(r => {
						this.loading = false;
						this.detail = r.data;
					})
					.catch(() => {
						this.loading = false;
					});
			}
		}
	}
};
</script>
<style lang="scss">
page {
	background-color: $page-color-base;
	position: relative;
	.about {
		.shop-info {
			.about-content {
				padding: $spacing-lg;
			}
			text-align: center;
			image {
				margin-top: 100upx;
				width: 240upx;
				height: 240upx;
				border-radius: 50%;
			}
		}
	}
}
</style>