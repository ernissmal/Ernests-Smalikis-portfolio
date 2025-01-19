<script setup>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Contacts from './components/Contacts.vue'
import SubscribeForm from './components/SubscribeForm.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
main {
  padding: 20px;
}
</style>
