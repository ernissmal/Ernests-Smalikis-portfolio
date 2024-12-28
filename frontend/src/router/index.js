import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ProjectsPage from '@/pages/ProjectsPage.vue';
import ContactPage from '@/pages/ContactPage.vue';
// ...existing code...

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // ...existing routes...
    {
      path: '/home',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsPage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage
    },
    // ...existing routes...
  ]
});
