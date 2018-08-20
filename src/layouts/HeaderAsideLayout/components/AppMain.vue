<template>
	<section class="app-main" :class="{'app-main-internal':internal}">
		<el-scrollbar :style="{'top':cInternal+'px'}" wrapStyle="overflow:auto;">
			<transition name="fade" mode="out-in">
				<!-- <router-view :key="key"></router-view> -->
				<router-view></router-view>
			</transition>
		</el-scrollbar>
	</section>
</template>

<script>
	export default {
		name: 'AppMain',
		props: {
			internal: {
				type: [Boolean, String],
				default: false
			},
		},
		computed: {
			cInternal() {
				return this.internal || "";
			}
		},
	};
</script>

<style lang="scss" scoped="scoped">
	.app-main-internal {
		overflow: hidden;
		.el-scrollbar{
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
		}
	}
</style>
