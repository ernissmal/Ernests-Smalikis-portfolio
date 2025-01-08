<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">
        <img src="../assets/vue.svg" alt="Website's logo" class="logo-img" />
      </div>
      <ul class="nav-items">
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Latest Project</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
      <div class="social">
        <a href="https://twitter.com/ESmalikis" class="social-link">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/erenesto_smalikis" class="social-link">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@ESmalikis" class="social-link">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://github.com/ernissmal" class="social-link">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
import '../assets/css/Header.css';
export default {
  name: "Header",
};
</script>