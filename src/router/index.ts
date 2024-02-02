import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized, type RouteLocationNormalizedLoaded } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'
import RegisterView from '@/views/RegisterView.vue'

const isAuthenticated = () => {
  return localStorage.getItem('tokenAuth') !== null;
};

const requireAuth = (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next:NavigationGuardNext): void => {
  if (isAuthenticated()) {
    next();
  } else {
    next('/login');
  }
};

const requireGuest = (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext):void => {
  if (!isAuthenticated()) {
    next();
  } else {
    next('/home');
  }
};

const routes = [
  { path: '/', redirect: isAuthenticated() ? '/home' : '/login' },
  { path: '/home', name: 'home', component: HomeView, beforeEnter: requireAuth },
  { path: '/about', name: 'about', component: AboutView, beforeEnter: requireAuth },
  { path: '/login', name: 'login', component: LoginView, beforeEnter: requireGuest },
  { path: '/register', name: 'register', component: RegisterView, beforeEnter: requireGuest },
  { path: '/blog', name: 'blog', component: BlogView, beforeEnter: requireAuth },
  { path: '/blog/:id', name: 'post', component: PostView, beforeEnter: requireAuth },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router
