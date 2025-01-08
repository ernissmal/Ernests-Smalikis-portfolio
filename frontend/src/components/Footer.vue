<template>
    <footer>
        <div class="social">
            <a href="https://twitter.com/ESmalikis"><i class="fab fa-twitter">Twitter|X</i></a>
            <a href="https://www.instagram.com/erenesto_smalikis"><i class="fab fa-instagram">Instagram</i></a>
            <a href="https://www.youtube.com/@ESmalikis"><i class="fab fa-youtube">YouTube</i></a>
            <a href="https://github.com/ernissmal"><i class="fab fa-github">gitHub</i></a>
        </div>
        <h1>Proudly developed by <a href="https://github.com/ernissmal"><i class="fab fa-github">ernissmal</i></a></h1>
        <h2>©2025 <br> All rights reserved.</h2>
        <div class="version">
            <h5>version 2.0</h5>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer {
  padding: 2rem 1rem;
  background: #111;
  text-align: center;
  color: #aaa;
}

.social-links a {
  margin: 0 0.5rem;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-links a:hover {
  color: white;
}
</style>
