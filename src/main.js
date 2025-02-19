import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from 'components/goods/goods'
import rating from 'components/rating/rating'
import seller from 'components/seller/seller'

import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

let app = Vue.extend(App)
let router = new VueRouter({
  linkActiveClass: 'active'
})

// router.map({
//  	'/goods': {
// 		component: goods
// 	},
// 	'/rating': {
// 		component: rating
// 	},
// 	'seller': {
// 		component: seller
// 	}
// })
router.map({
  '/goods': {
    component: goods
  },
  '/rating': {
    component: rating
  },
  '/seller': {
    component: seller
  }
})

router.start(app, '#app')
router.go('/goods')
