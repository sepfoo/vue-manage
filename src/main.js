import Vue from 'vue'
import App from './App.vue'
import {Button,Aside,Main,Header,Container,Menu,Submenu,MenuItemGroup,MenuItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import router from '@/router'

Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
