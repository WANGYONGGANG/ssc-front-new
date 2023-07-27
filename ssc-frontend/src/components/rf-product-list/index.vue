<template>
	<view class="rf-product-list">
		<view class="rf-product-list-container">
			<block v-for="(item, index) in list" :key="index">
				<!--商品列表-->
				<view
					v-if="(index + 1) % 2 !== 0 || isList"
					class="rf-product-item"
					@tap.stop="navTo(`/pages/product/product?id=${item.id}`)"
					:class="[isList ? 'rf-product-flex-list' : '']"
					hover-class="hover"
					:hover-start-time="150"
				>
					<view class="rf-product-image-wrapper">
						<image
							:src="item.picture"
							mode="widthFix"
							:preview="false"
							:class="[isList ? 'rf-product-list-img' : 'rf-product-img']"
						></image>
						<text class="sketch in1line">{{ item.sketch }}</text>
						<view class="triangle-wrapper">
							<image class="triangle-tag" :src="item | filterTagName"></image>
						</view>
					</view>
					<view class="rf-pro-content">
						<view class="rf-pro-tit">{{ item.name }}</view>
						<view v-if="item">
							<view class="rf-pro-price">
								<text class="rf-sale-price" :class="'text-' + themeColor.name"
									>{{ moneySymbol }}{{ item.price }}</text
								>
								<text
									class="rf-factory-price"
									v-if="item.market_price > item.price"
									>{{ moneySymbol }}{{ item.market_price }}</text
								>
							</view>
						</view>
					</view>
				</view>
				<!--商品列表-->
			</block>
		</view>
		<view class="rf-product-list-container" v-if="!isList">
			<block v-for="(item, index) in list" :key="index">
				<!--商品列表-->
				<view
					v-if="(index + 1) % 2 === 0"
					class="rf-product-item"
					@tap.stop="navTo(`/pages/product/product?id=${item.id}`)"
					:class="[isList ? 'rf-product-flex-list' : '']"
					hover-class="hover"
					:hover-start-time="150"
				>
					<view class="rf-product-image-wrapper">
						<image
							:src="item.picture"
							mode="widthFix"
							:preview="false"
							:class="[isList ? 'rf-product-list-img' : 'rf-product-img']"
						></image>
						<text class="sketch in1line">{{ item.sketch }}</text>
						<view
							class="triangle-wrapper"
							v-if="
								item.shipping_type === '1' ||
								item.is_virtual === '1' ||
								item.commissionRate ||
								item.is_open_presell === '1'
							"
						>
							<image class="triangle-tag" :src="item | filterTagName"></image>
						</view>
					</view>
					<view class="rf-pro-content">
						<view class="rf-pro-tit">{{ item.name }}</view>
						<view v-if="item">
							<view class="rf-pro-price">
								<text class="rf-sale-price" :class="'text-' + themeColor.name"
									>{{ moneySymbol }}{{ item.price }}</text
								>
								<text
									class="rf-factory-price"
									v-if="item.market_price > item.price"
									>{{ moneySymbol }}{{ item.market_price }}</text
								>
							</view>
						</view>
					</view>
				</view>
				<!--商品列表-->
			</block>
		</view>
	</view>
</template>
<script>
export default {
	name: "rfProductList",
	props: {
		list: {
			type: Array,
			default() {
				return [];
			},
		},
		// 是否以列表展示 | 列表或大图
		isList: {
			type: Boolean,
			default: false,
		},
		// 是否以列表展示 | 列表或大图
	
	},
	components: {
	},
	data() {
		return {
			
		};
	},

	methods: {
		// 跳转详情
		navTo(route) {
			this.$mRouter.push({ route });
		},
	},
};
</script>
