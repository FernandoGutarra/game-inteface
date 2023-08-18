import { createRouter, createWebHistory } from 'vue-router';
import loginView from '../views/LoginView.vue';
import registerView from '../views/RegisterView.vue';
import adminView from '../views/AdminView.vue';
const routes = [
  {
    path: '/',
    component: loginView
  },
  {
    path: '/login',
    name: 'login',
    component: loginView
  },
  {
    path: '/register',
    name: 'register',
    component: registerView
  }, 
  {
    path: '/admin',
    name: 'admin',
    component: adminView,
    meta: { requiresAuth: true },
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
