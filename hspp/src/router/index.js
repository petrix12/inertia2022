import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/blog',
		/* redirect: '/post', */
		redirect: { name: 'Blog' },
	},
	{
		path: '/post',
		name: 'Blog',
		component: () => import('../views/Blog')
	},
	{
		path: '/blog/:post',
		name: 'Post',
		component: () => import('../views/Post')
	},
	{
		path: '/user/:user/post/:post',
		name: 'UserPost',
		component: () => import('../views/UserPost')
	},
	{
		path: '/compras/:orderIdt(\\d+)',
		name: 'Order',
		component: () => import('../views/Order')
	},
	{
		path: '/compras/:productName',
		name: 'Product',
		component: () => import('../views/Product')
	},
	{
		path: '/users/:userId(\\d+)?',
		name: 'Users',
		component: () => import('../views/Users'),
		props: true,
		children: [
			{
				path: '',
				name: 'UsersIndex',
				component: () => import('../views/users/Index'),
			},
			{
				path: 'profile',
				name: 'UsersProfile',
				component: () => import('../views/users/Profile'),
			},
			{
				path: 'courses',
				name: 'UsersCourses',
				component: () => import('../views/users/Courses'),
			}
		]
	},
	{
		path: '/:pathMatch(.*)',
		name: 'NotFound',
		component: () => import('../views/NotFound')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router