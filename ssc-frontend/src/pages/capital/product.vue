<template>
	<view class="product">
		<rf-product-detail
			@product="getProductDetail"
			:url="currentUrl"
			:product="productDetail"
		></rf-product-detail>
		<!--回到顶部-->
		<rf-back-top :scrollTop="scrollTop"></rf-back-top>
		<!-- 404页面 -->
		<view v-if="!productDetail.productName && !loading">
			<rf-no-data :custom="true">
				<view class="no-data-title">
					{{ errorInfo || "暂无数据" }}
				</view>
				<view
					@tap="getProductDetail(productDetail.productId)"
					slot="refresh"
					class="spec-color"
					>重新加载</view
				>
			</rf-no-data>
		</view>

		<!--页面加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading
	></view>
</template>
<script>
import { productDetail } from "@/api/product";
import rfProductDetail from "@/components/rf-product-detail";
import rfBackTop from "@/components/rf-back-top";
import rfNoData from "@/components/rf-no-data";
export default {
	components: {
		rfProductDetail,
		rfBackTop,
		rfNoData,
	},
	data() {
		return {
			productDetail: {},
			loading: true,
			errorInfo: "",
			scrollTop: 0,
			currentUrl: "",
		};
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
	async onLoad(options) {
		this.productId = options.id;
		await this.initData();
	},
	methods: {
		// 数据初始化
		async initData() {
			this.currentUrl = `${this.$mConfig.hostUrl}/pages/product/product?id=${this.productId}`;
			await this.getProductDetail();
		},
		// 获取产品详情
		async getProductDetail() {
			await this.$http
				.get(`${productDetail}`, {
					id: this.productId,
				})
				.then(async (r) => {
					this.loading = false;
					this.productDetail = r.data;
					uni.setNavigationBarTitle({ title: r.data.name });
				})
				.catch((err) => {
					this.loading = false;
					this.errorInfo = err;
				});
		},
	},
};
</script>
<style scoped lang="scss">
page {
	background: $page-color-base;
}
</style>
