<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img :src="seller.avatar" width="64" height="64">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="support">
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div v-if="seller.supports" class="support-count" @click="showDetail">
				<span class="count">{{seller.supports.length}}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper" @click="showDetail">
			<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img :src="seller.avatar" width="100%" height="100%">
		</div>
		<div v-show="detailShow" class="detail" transition="fade">
			<div class="detail-wrapper clearfix">
				<div class="detail-main">
					<h1 class="name">{{seller.name}}</h1>
					<div class="star-wrapper">
						<star :size="48" :score="seller.score"></star>
					</div>
					<div class="title">
						<div class="line"></div>
						<div class="text">优惠信息</div>
						<div class="line"></div>
					</div>
					<ul v-if="seller.supports" class="supports">
						<li class="support-item" v-for="(index,item) in seller.supports">
							<span class="icon" :class="classMap[item.type]"></span>
							<span class="text">{{item.description}}</span>
						</li>
					</ul>
					<div class="title">
						<div class="line"></div>
						<div class="text">商家公告</div>
						<div class="line"></div>
					</div>
					<div class="bulletin">
						<p class="content">{{seller.bulletin}}</p>
					</div>
				</div>
				
			</div>
			<div class="detail-close">
				<i class="icon-close" @click="hideDetails"></i>
			</div>
		</div>
	</div>
</template>

<script>
	import star from 'components/star/star'

	export default {
		// props: {
		// 	seller: {
		// 		type: Object
		// 	}
		// }
		components: {
			star
		},
		props: ['seller'],
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		},
		data() {
			return {
				detailShow: false
			}
		},
		methods: {
			showDetail() {
				this.detailShow = true
			},
			hideDetails () {
				this.detailShow = false
			}
		}
	}
</script>
<style lang="stylus" type="text/stylus">
	@import('../../common/stylus/mixin.styl')

	.header
		position relative
		color #fff
		background rgba(7,17,27,0.5)
		overflow hidden
		.content-wrapper
			position relative
			padding 24px 12px 18px 24px
			font-size 0
			.avatar
				display inline-block
				vertical-align top
				img
					border-radius 2px
			.content
				display inline-block
				margin-left 16px
				font-size 14px
				.title
					margin 2px 0 8px 0
					.brand
						display inline-block
						width 30px
						height 18px
						bg-image('brand')
						background-size 30px 18px
						background-repeat no-repeat
						vertical-align top
					.name
						margin-left 6px
						font-size 16px
						line-height 18px
						font-weight bold
				.description
					margin-bottom 10px
					font-size 12px
					line-height 12px
				.support
					.icon
						display inline-block
						vertical-align middle
						width 12px
						height 12px
						margin-right 4px
						background-size 12px 12px
						background-repeat no-repeat
						&.decrease
							bg-image('decrease_1')
						&.discount
							bg-image('discount_1')
						&.guarantee
							bg-image('guarantee_1')
						&.invoice
							bg-image('invoice_1')
						&.special
							bg-image('special_1')
					.text
						line-height 12px
						font-size 10px
			.support-count
				position absolute
				right 12px
				bottom 18px
				padding 0 8px
				height 24px
				line-height 24px
				border-radius 14px
				background rgba(0,0,0,0.2)
				text-align center
				.count
					font-size  10px
				.icon-keyboard_arrow_right
					line-height 24px
					margin-left 2px
					font-size  10px
		.bulletin-wrapper
			position relative
			height 28px
			line-height 28px
			padding 0 22px 0 12px
			white-space nowrap
			overflow hidden
			text-overflow ellipsis
			background rgba(7,17,27,0.2)
			.bulletin-title
				display inline-block
				width 22px
				height 12px
				bg-image('bulletin')
				background-size 22px 12px
				background-repeat no-repeat
			.bulletin-text
				vertical-align top
				margin 0 4px
				font-size 10px
			.icon-keyboard_arrow_right
				position absolute
				font-size 10px
				right 12px
				top 8px
		.background
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			z-index -1
			filter blur(10px)
		.detail
			position fixed
			top 0
			left 0
			z-index 100
			width 100%
			height 100%
			overflow auto
			transition all 0.5s
			back-drop-filter blur(10px)
			&.fade-transition
				opacity 1
				background rgba(7,17,27,0.8)
			&.fade-enter, &.fade-leave
				opacity 0
				background rgba(7,17,27,0)
			.detail-wrapper
				width 100%
				min-height 100%
				.detail-main
					margin-top 64px
					padding 0 36px 64px 36px
					.star-wrapper
						margin-top 18px
						padding 2px
						text-align center
					.name
						line-height 16px
						text-align center
						font-size 16px
						font-weight 700
					.title
						display flex
						width 80%
						margin 28px auto 24px auto
						.line
							flex-grow 1
							position relative
							top -6px
							border-bottom 1px solid rgba(255,255,255,0.2)
						.text
							
							padding 0 12px
							font-weight 700
							font-size 14px
					.supports
						width 80%
						margin 0 auto
						padding 0
						.support-item
							padding 0 12px
							margin-bottom 12px
							font-size 0
							&:last-child
								margin-bottom 0
							.icon
								display inline-block
								width 16px
								height 16px
								vertical-align top
								margin-right 6px
								background-size 16px 16px
								background-repeat  no-repeat
								&.decrease
									bg-image('decrease_1')
								&.discount
									bg-image('discount_1')
								&.guarantee
									bg-image('guarantee_1')
								&.invoice
									bg-image('invoice_1')
								&.special
									bg-image('special_1')
							.text
								font-size 12px
								line-height 12px
					.bulletin
						width 80%
						margin 0 auto
						.content
							padding 0 12px
							line-height 24px
							font-size 12px
			.detail-close
				position relative
				width 32px
				height 32px
				margin -64px auto 0 auto
				clear both
				font-size 32px

</style>
