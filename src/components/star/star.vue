<template>
	<div class="star" :class="starType">
		<span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
	</div>
</template>

<script>
	export default {
		props: ['size', 'number'],
		computed: {
			starType() {
				return 'star-' + this.size
			}
		}
	}
</script>

<style lang="stylus">
	.star
		font-size 0
		.star-item
			display inline-block
			background no-repeat
			&.star-48
			&.star-36
			&.star-24
</style>
