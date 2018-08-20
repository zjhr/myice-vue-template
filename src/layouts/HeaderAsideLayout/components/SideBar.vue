<template>
	<scroll-bar :class="{scroll_bar_close:isCollapse}" :top="0">
		<div class="logo">
			<img src="https://img.alicdn.com/tfs/TB13UQpnYGYBuNjy0FoXXciBFXa-242-134.png" width="40">
			<span class="site-name scroll_bar_close_hide">ADMIN LITE</span>
		</div>
		<el-row class="logo_user scroll_bar_close_show" style="display: none;">
			<el-col :span="24">
				<img src="@img/user.jpg" alt="" width="40">
			</el-col>
		</el-row>
		<el-row class="logo_user scroll_bar_close_hide" type="flex" justify="center" align="middle">
			<el-col :span="8" :offset="2">
				<img src="@img/user.jpg" alt="" width="40">
				<div>ceneral</div>
			</el-col>
			<el-col :span="12" :offset="2" style="text-align: left;">
				<div style="color: #DCDCDC;font-size: 12px;">欢迎，</div>
				<div>张三</div>
			</el-col>
		</el-row>
		<el-menu mode="vertical" 
			:show-timeout="200" 
			background-color="#294052" 
			text-color="hsla(0, 0%, 100%, .65)" 
			active-text-color="#409EFF"
		    unique-opened 
			:default-active="active" 
			:collapse="isCollapse">
			<template v-for="item in asideMenuConfig">
				<side-bar-children :item="item" :key="item.name" class="z-f-active" :class="{'op-active':opActive(item.path)}"></side-bar-children>
			</template>
		</el-menu>
	</scroll-bar>
</template>

<script>
	import ScrollBar from './ScrollBar';
	import SideBarChildren from './SideBarChildren';
	import {
		asideMenuConfig
	} from '@/menuConfig';

	export default {
		components: {
			ScrollBar,
			SideBarChildren
		},
		name: 'SideBar',
		props: {
			isCollapse: {
				type: Boolean,
				default:false 
			},
		},
		data() {
			return {
				asideMenuConfig
			};
		},
		computed: {
			active() {
				return this.$route.path
			},
			opActive(){
				return (path)=>{
					return this.$route.path.includes(path)
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 64px;
		line-height: 64px;
		background: #294052;
		color: #fff;
		text-align: center;
		font-size: 20px;
		font-weight: 600;
		overflow: hidden;
		white-space: nowrap;
	}
	.logo_user{
		font-size: 14px;
		font-weight: normal;
		line-height: normal;
		color: #fff;
		text-align: center;
		white-space: nowrap;
		img{
			border-radius: 20px;
		}
	}
	.site-name {
		margin-left: 10px;
	}
	.sidebar-container {
		box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
		transition: width 0.28s;
		width: 230px;
		height: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 1001;
		overflow: hidden;
		a {
			display: inline-block;
			width: 100%;
		}
		.el-menu {
			padding-top: 16px;
			width: 100% !important;
			border: none;
		}
		&.scroll_bar_close{
			width: 65px;
			.scroll_bar_close_hide{
				display: none;
			}
			.scroll_bar_close_show{
				display:block!important;
			}
		}
	}
</style>
