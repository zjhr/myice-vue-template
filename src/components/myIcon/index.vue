<template>
	<fa-icon v-bind="$attrs" :name="use?'myicon':$attrs['name']">
		<use v-if="use" :xlink:href="cUse"></use>
	</fa-icon>
</template>

<script>
	import VueAwesome from 'vue-awesome';
	VueAwesome.register({
	  myicon: {
		width: 25,
		height: 25
	  }
	})
	export default {
		name: 'my-icon',
		inheritAttrs:false,
		components:{
			FaIcon:VueAwesome
		},
		props: {
			use: String
		},
		computed: {
			cUse() {
				return "#"+this.use;
			}
		},
	}
</script>

<style lang="scss" scoped>
	
</style>
