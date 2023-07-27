<template>
	<rf-top-dropdown
		tui-top-dropdown="tui-top-dropdown"
		bgcolor="rgba(76, 76, 76, 0.95)"
		:show="popupShow"
		:height="0"
		@close="hide"
	>
	
	</rf-top-dropdown>
</template>
<script>
import rfTopDropdown from '@/components/rf-top-dropdown';
export default {
	name: 'rfNavDetail',
	components: { rfTopDropdown },
	props: {
		popupShow: {
			type: Boolean,
			detault: true
		}
	},
	data() {
		return {
			top: this.CustomBar,
		};
	},
	methods: {
		hide() {
			this.$emit('hide');
		},
		navTo(item) {
			this.$emit('hide');
			if (!item.url) return;
			if (!this.$mStore.getters.hasLogin && !item.urlType) {
				this.$mHelper.backToLogin();
				return;
			}
			if (item.urlType === 'tab') {
				this.$mRouter.switchTab({ route: item.url });
			} else {
				this.$mRouter.push({ route: item.url });
			}
		}
	}
};
</script>
<style scoped lang="scss">
	/*顶部菜单*/
	.tui-menu-box {
		box-sizing: border-box;
	}
	.tui-menu-header {
		font-size: 34rpx;
		color: #fff;
		height: 32px;
		margin-top: 45upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tui-top-dropdown {
		z-index: 9999 !important;
	}
	.tui-menu-itembox {
		color: #fff;
		padding: 40rpx 10rpx 0 10rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		font-size: 26rpx;
	}
	.tui-menu-item {
		width: 22%;
		height: 160rpx;
		border-radius: 24rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		background: rgba(0, 0, 0, 0.4);
		margin-right: 4%;
		margin-bottom: 4%;
	}
	.tui-menu-item:nth-of-type(4n) {
		margin-right: 0;
	}
	.tui-badge-box {
		position: relative;
		.iconfont {
			font-size: 40upx;
		}
	}
	.tui-badge-box .tui-badge-class {
		position: absolute;
		top: -8px;
		right: -8px;
	}
	.tui-msg-badge {
		top: -10px;
	}
	.tui-icon-up {
		position: relative;
		display: inline-block;
		left: 50%;
		transform: translateX(-50%);
	}
	.tui-menu-text {
		padding-top: 12rpx;
	}
	.tui-opcity .tui-menu-text,
	.tui-opcity .tui-badge-box {
		opacity: 0.5;
		transition: opacity 0.2s ease-in-out;
	}
	.iconxiangxiajiantou {
		display: flex;
		justify-content: center;
	}
	/*顶部菜单*/
</style>
