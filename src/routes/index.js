import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import ReportView from '../views/ReportView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/report',
    component: ReportView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
