import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Product from '../components/Product.vue';
import Pemesanan from '../components/Pemesanan.vue';

import Register from '../components/Register.vue';

const routes = [
  { path: '/',component:Home },
  { path: '/about', component:About },
  { path: '/product', component:Product },
  { path: '/pemesanan', component:Pemesanan },
  { path: '/register', component: Register }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
