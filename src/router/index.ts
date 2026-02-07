import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/start',
      component: () => import('@/views/StartView.vue'),
    },
    {
      path: '/quiz',
      component: () => import('@/views/QuizView.vue'),
    },
    {
      path: '/loading',
      component: () => import('@/views/LoadingView.vue'),
    },
    {
      path: '/result',
      component: () => import('@/views/ResultView.vue'),
    },
  ],
})

export default router
