import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('@/views/home.vue');

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
  ],
});

export default router;
