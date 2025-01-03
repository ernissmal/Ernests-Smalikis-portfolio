<template>
  <div>
    <Navbar />
    <div class="content">
      <Card title="Welcome to My Portfolio" content="This is a brief introduction to my portfolio." />
      <Card title="Projects" content="Here are some of the projects I have worked on." />
      <Form />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import PageFooter from '@/components/PageFooter.vue';
import CardComponent from '@/components/CardComponent.vue';
import FormComponent from '@/components/FormComponent.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar,
    CardComponent,
    FormComponent

  }
}
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>
