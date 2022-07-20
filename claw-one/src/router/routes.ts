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
      {
        path: 'time-management/to-do-list',
        name: 'to-do-list',
        component: () => import('src/views/pages/TimeManagement/ToDoList/ToDoList.vue')
      },
      {
        path: 'info-center/seminar-info',
        name: 'seminar-info',
        component: () => import('src/views/pages/InformationCenter/SeminarInfo/SeminarInfo.vue')
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
