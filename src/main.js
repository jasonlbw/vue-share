// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Test from '@/components/common/Test'

Vue.config.productionTip = false
Vue.use(ElementUI)
/*注册全局组件*/
Vue.component('test', Test)
/*全局混合使用*/
let eventBus = new Vue()
Vue.mixin({
	methods: {
		hello () {
			console.log('hello from mixin')
		},
      eventBus () {
         return eventBus
      }
	},
  filters : {
    capitalize (value) {
      if(!value) {
        return ''
      }
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})

/* eslint-disable no-new */
new Vue({
	 //挂载对象
  	el: '#test',
  	//给当前实例注入路由插件
  	router,
  	//模板 => 替换挂载对象
  	template: '<App/>',
  	//当前对象可使用的组件
  	components: { App }
})
