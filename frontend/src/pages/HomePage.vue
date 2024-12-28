<template>
  <div>
    <Navbar />
    <div class="content">
      <Card title="Welcome to My Portfolio" content="This is a brief introduction to my portfolio." />
      <Card title="Projects" content="Here are some of the projects I have worked on." />
      <Form />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Card from '@/components/Card.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar,
    Footer,
    Card,
    Form
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>
