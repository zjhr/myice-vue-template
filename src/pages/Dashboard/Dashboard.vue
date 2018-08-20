<template>
	<div>
		<data-display></data-display>
		<my-icon scale="1.5" flip="horizontal" use="icon-wenjian"></my-icon>
	</div>
</template>

<script>
	import DataDisplay from './components/DataDisplay'
	
	export default {
		name:"Dashboard",
		components: {
			DataDisplay
		},
	}
</script>