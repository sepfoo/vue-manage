import Vue from 'vue'
import App from './App.vue'
import {Button,Input,Select,Option,Switch,DatePicker,Breadcrumb,BreadcrumbItem,Table,TableColumn,Aside,Main,Form,FormItem,Header,Container,Menu,Submenu,MenuItemGroup,MenuItem,Dropdown,DropdownMenu,DropdownItem,Row,Col,Card} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'
import './assets/less/common.less'
import './assets/less/reset.less'
import './assets/less/home.less'


import router from '@/router'
import store from '@/store'
import axios from 'axios'
import '@/api/mock'

Vue.prototype.$axios = axios

Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)

Vue.use(FormItem)


Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Card)




Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
