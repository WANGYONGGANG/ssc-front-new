<template>
	<view class="container product-list">
		<view class="rf-header-box">
			<view
				class="rf-header"
				:style="{ width: width + 'px', height: height + 'px' }"
			>
				<view
					class="rf-back"
					:style="{ marginTop: arrowTop + 'px' }"
					@tap="back"
				>
					<text class="iconfont iconzuo"></text>
				</view>
			</view>
		</view>
		<view class="product-list-wrapper">
			<rf-product-list
				:bottom="0"
				:list="productList"
				:isList="isList"
				:style="{ paddingTop: 120 + 'upx' }"
			></rf-product-list>
		</view>
		<rf-load-more
			:status="loadingType"
			v-if="productList.length > 0"
		></rf-load-more>
		<rf-empty
			:info="errorInfo || '暂无数据'"
			v-if="productList.length === 0 && !loading"
		></rf-empty>
		<!--页面加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script>
import rfProductList from "@/components/rf-product-list";
import rfLoadMore from "@/components/rf-load-more/rf-load-more";
import { productList } from "@/api/product";
/* eslint-disable */
export default {
	components: {
		rfProductList,
		rfLoadMore,
	},
	data() {
		return {
			errorInfo: "",
			loadingType: "more",
			page: 1,
			loading: true,
			width: 200, //header宽度
			height: 64, //header高度
			arrowTop: 0, //箭头距离顶部距离
			isList: true, //是否以列表展示  | 列表或大图

			productList: [],
			pullUpOn: true,
			productParams: {},
		};
	},
	onLoad(options) {
		let obj = {};
		// #ifdef MP-WEIXIN
		obj = wx.getMenuButtonBoundingClientRect();
		// #endif
		// #ifdef MP-BAIDU
		obj = swan.getMenuButtonBoundingClientRect();
		// #endif
		// #ifdef MP-ALIPAY
		my.hideAddToDesktopMenu();
		// #endif
		uni.getSystemInfo({
			success: (res) => {
				this.width = obj.left || res.windowWidth;
				this.height = obj.top
					? obj.top + obj.height + 8
					: res.statusBarHeight + 44;
				this.arrowTop = obj.top
					? obj.top + (obj.height - 32) / 2
					: res.statusBarHeight + 6;
			},
		});
		this.initData(options);
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.page = 1;
		this.productList.length = 0;
		this.getProductList("refresh", {});
	},
	// 加载更多
	onReachBottom() {
		if (this.loadingType === "nomore") return;
		this.page++;
		this.getProductList();
	},
	methods: {
		// 初始化数据
		initData(options) {
			let params = {};
			if (options.param) {
				params = { ...params, ...JSON.parse(options.param) };
			}
			this.productParams = params;
			this.getProductList();
		},

		back() {
			this.$mRouter.back();
		},

		// 获取列表
		async getProductList(type) {
			await this.$http
				.get(`${productList}`, {
					...this.productParams,
					page: this.page,
				})
				.then(async (r) => {
					this.loading = false;
					if (type === "refresh") {
						uni.stopPullDownRefresh();
					}
					this.loadingType = r.data.length === 10 ? "more" : "nomore";
					this.productList = [...this.productList, ...r.data];
				})
				.catch((err) => {
					this.errorInfo = err;
					this.loading = false;
					if (type === "refresh") {
						uni.stopPullDownRefresh();
					}
				});
		},
		// 跳转详情
		navTo(route) {
			this.$mRouter.push({ route });
		},
	},
};
</script>
<style lang="scss">
page {
	background: $page-color-base;
}
.product-list {
	padding-bottom: env(safe-area-inset-bottom);
	/* 隐藏scroll-view滚动条*/
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}
	.rf-header-box {
		width: 100%;
		background: $color-white;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		.rf-header {
			display: flex;
			align-items: flex-start;
			.rf-back {
				margin-left: 8upx;
				height: 32px !important;
				width: 32px !important;
				display: flex;
				justify-content: center;
				align-items: center;
				.iconzuo {
					font-size: $font-lg + 4upx;
					font-weight: 500;
					color: $font-color-dark;
				}
			}
		}
	}
	.product-list-wrapper {
	}
}
</style>
