<template>
	<div class="star" :class="starType">
		<span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
	</div>
</template>

<script>
	const LENGTH = 5
	const CLS_on = 'on'
	const CLS_half = 'half'
	const CLS_off = 'off'
	export default {
		props: ['size', 'number'],
		computed: {
			starType() {
				return 'star-' + this.size
			},
			itemClasses() {
				let result = []
				let score = Math.floor(this.score*2) / 2
				let hasDecimal = score % 1 != 0
				let integer = Math.floor(score)
				for (let i=0; i<integer;i++){
					result.push(CLS_on)
				}
				if(hasDecimal){
					result.push(CLS_half)
				}
				while (result.length < LENGTH){
					result.push(CLS_off)
				}

				return result;
			}
		}
	}
</script>

<style lang="stylus">
	@import('../../stylus/mixin')
	.star
		font-size 0
		.star-item
			display inline-block
			background no-repeat
		&.star-48
			.star-item
				width 20px
				height 20px
				margin-right 22px
				background-size 20px 20px
				&:last-child
					margin-right 0
				&.on
					bg-image('star48_on')
				&.off
					bg-image('star48_off')
				&.half
					bg-image('star48_half')
		&.star-36
			.star-item
				width 15px
				height 15px
				margin-right 6px
				background-size 15px 15px
				&:last-child
					margin-right 0
				&.on
					bg-image('star36_on')
				&.off
					bg-image('star36_off')
				&.half
					bg-image('star36_half')
		&.star-24
			.star-item
				width 10px
				height 10px
				margin-right 3px
				background-size 10px 10px
				&:last-child
					margin-right 0
				&.on
					bg-image('star36_on')
				&.off
					bg-image('star36_off')
				&.half
					bg-image('star36_half')
</style>
