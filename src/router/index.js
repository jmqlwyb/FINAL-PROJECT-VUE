import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/',
    redirect: '/home'  // Default route, redirects to home
  }
];

const router = createRouter({
  history: createWebHistory(), // No need to pass process.env.BASE_URL here
  routes
});

export default router;
