<template>
  <div>
    <Navbar />
    <div class="content">
      <h1>Contact Me</h1>
      <Form />
    </div>
  </div>
</template>

<script>
import Navbar from './@/components/Navbar.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'ContactPage',
  components: {
    Navbar,
    Form
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>
