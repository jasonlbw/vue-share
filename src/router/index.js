import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/common/Layout'
import Home from '@/components/Home'
import About from '@/components/About'
import Detail from '@/components/Detail'
import ShowList from '@/components/ShowList'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
		  	path: '/',
		  	component: Layout,
		  	children: [
		  		{
		  			path: '',
		  			redirect: '/home'
		  		},
		  		{
		  			path: 'home',
		  			component: Home
		  		},
		  		{
		  			path: 'about',
		  			component: About
		  		},
		  		{
		  			path: 'detail',
		  			component: Detail
		  		},
		  		{
		  			path: 'showList',
		  			component: ShowList
		  		}
		  	]
		}
	]
})
