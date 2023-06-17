import { createRouter, createWebHistory } from "vue-router";
import dashboard from '../pages/master/dashboard.vue';
import home from '../pages/home.vue';
import profile from '../pages/profile.vue';

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: dashboard,
    children: [
      {
        name: 'home',
        path: 'home',
        component: home
      },
      {
        name: 'Profile',
        path: 'profile',
        component: profile
      }
    ]
  }
];

function createRouterInstance() {
  return createRouter({
    history: createWebHistory(),
    routes
  });
}

const router = createRouterInstance();
export default router;
