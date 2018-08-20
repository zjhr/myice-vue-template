<template>
		<router-link v-if="!item.children" :to="firstPath+item.path" :class="firstClass">
			<el-menu-item :index="firstPath+item.path">
				<span v-if="item && item.name" slot="title">{{item.name}}</span>
			</el-menu-item>
		</router-link>
		<el-submenu v-else :index="item.name || item.path">
			<template slot="title">
				<i v-if="item && item.icon" :class="item.icon"></i>
				<span v-if="item && item.name" slot="title">{{item.name}}</span>
			</template>
			<template v-for="child in filterHidden">
				<side-bar-children 
				:item="child" 
				:firstPath="firstPath+item.path" 
				:key="child.name"/></side-bar-children>
			</template>
		</el-submenu>
</template>

<script>
	export default {
		name: 'SideBarChildren',
		props: {
			item:Object,
			firstClass:String,
			firstPath:{
				type: String,
				default: ''
			}
		},
		data() {
			return {

			}
		},
		computed:{
			filterHidden(){
				// return (v) => v.filter((i) => !i.hidden) 传参方式
				return this.item.children.filter((i) => !i.hidden)
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.sidebar-container {
		.el-submenu .el-menu-item {
			min-width: 256px !important;
			// padding-left: 48px !important; 
			// background-color: #000c17 !important;
			&:hover {
				color: #fff !important;
			}
		}
		.el-menu-item,
		.el-submenu .el-menu-item {
			&.is-active {
				background-color: #334A5C !important;
				color: #fff !important;
			}
		}
		.el-submenu {
			&.is-opened {
				&.z-f-active>/deep/ .el-submenu__title {
					box-shadow: 0px 1px 0px #1a2732, inset 0px 1px 1px #5d7084;
					z-index: 1;
				}
			}
			&.op-active{
				position: relative;
				&:after {
					content: "";
					display: block;
					width: 5px;
					height: 100%;
					background: #1FB59A;
					position: absolute;
					right: 0;
					top: 0;
					z-index: 3;
				}
			}
			.el-menu-item{
				position: relative;
				>span{
					&:after,&:before{
						content: "";
						display: block;
						position: absolute;
						background: #445768;
					}
					&:after{
						width: 12px;
						height: 12px;
						margin-left: -20px;
						border-radius: 10px;
						top: 50%;
						margin-top: -6px;
					}
					&:before{
						width: 3px;
						height: 100%;
						margin-left: -15px;
					}
				}
			}
		}
		.el-submenu__title i {
			font-size: 16px;
			color: #fff;
		}
	}
</style>
