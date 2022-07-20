import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/views/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/views/pages/Home/HomePage.vue')
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('components/pages/ErrorNotFound.vue'),
  },
];

export default routes;
