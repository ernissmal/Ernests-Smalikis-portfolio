<template>
  <div>
    <Navbar />
    <div class="content">
      <h1>Projects</h1>
      <Card title="Project 1" content="Description of project 1." />
      <Card title="Project 2" content="Description of project 2." />
      <Card title="Project 3" content="Description of project 3." />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'ProjectsPage',
  components: {
    Navbar,
    Footer,
    Card
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>
