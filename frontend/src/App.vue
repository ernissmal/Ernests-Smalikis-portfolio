<template>
  <div id="app">
    <Header />
    <About />
    <Portfolio />
    <Contacts />
    <MailingList />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Contacts from './components/Contacts.vue';
import MailingList from './components/MailingList.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    About,
    Portfolio,
    Contacts,
    MailingList,
    Footer
  }
}
</script>

<style>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif; /* Sleek, modern font */
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  line-height: 1.6;
}

/* Links */
a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}

a:hover {
  color: #aaa; /* Subtle hover effect */
}

/* Buttons */
button {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #fff;
  color: #000;
}

/* Headings */
h1, h2, h3, h4, h5 {
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Animations */
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
