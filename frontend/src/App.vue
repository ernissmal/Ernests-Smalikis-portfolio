<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <section id="home">
        <HomePage />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ContactPage from './pages/ContactPage.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    PageFooter,
    HomePage,
    ProjectsPage,
    ContactPage
  }
};
</script>

<style scoped>
/* Your styles here */
</style>