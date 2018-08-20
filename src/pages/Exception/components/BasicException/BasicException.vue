<template>
	<div className="basic-exception">
		<basic-container>
			<div class="exception-content">
				<img src="https://img.alicdn.com/tfs/TB1w4M7bNrI8KJjy0FpXXb5hVXa-260-260.png" class="imgException" />
				<div>
					<h3 class="title">抱歉，服务器出错了</h3>
					<p class="description">
						服务器出错了，请重新
						<router-link to="" @click.native="flushCom" replace>
							<el-button type="text">刷新页面</el-button>
						</router-link>
						或返回
						<router-link to="/" replace>
							<el-button type="text">首页</el-button>
						</router-link>
					</p>
				</div>
			</div>
		</basic-container>
	</div>
</template>

<script>
	import BasicContainer from '@vue-materials/basic-container';

	export default {
		components: {
			BasicContainer
		},
		name: 'BasicException',
		data() {
			return {};
		},
		methods:{
　　　　flushCom:function(){
　　　　　　this.$router.go(-1);  
　　　　}
　　}
	};
</script>

<style lang="scss" scoped>
	$container-height: 70vh;

	.exception-content {
		display: flex;
		align-items: center;
		justify-content: center;
		.title {
			color: rgb(51, 51, 51);
		}
		.description {
			color: rgb(102, 102, 102);
		}
	}

	@media screen and (max-width: 1199px) and (min-width: 721px) {
		.exception-content {
			.imgException {
				max-width: 180px;
				margin-right: 30px;
			}
			.title {
				font-size: 20px;
				margin: 10px 0;
			}
			.description {
				font-size: 14px;
			}
		}
	}

	@media screen and (min-width: 1200px) {
		.exception-content {
			min-height: $container-height;

			.imgException {
				max-width: 260px;
				margin-right: 50px;
			}
			.title {
				font-size: 24px;
				margin: 20px 0;
			}
			.description {
				font-size: 16px;
			}
		}
	}
</style>
