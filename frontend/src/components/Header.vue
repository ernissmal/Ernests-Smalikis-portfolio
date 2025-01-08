<template>
    <header>
        <nav>
            <div class="logo">
                <img src="../assets/vue.svg" alt="Website's logo" height="10%" width="10%">
            </div>
            <div class="navItems">
                <a href="#about">About</a>
                <a href="#portfolio">Latest project</a>
                <a href="#contacts">Contacts</a>
            </div>
            <div class="social">
                <a href="https://twitter.com/ESmalikis"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/erenesto_smalikis"><i class="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/@ESmalikis"><i class="fab fa-youtube"></i></a>
                <a href="https://github.com/ernissmal"><i class="fab fa-github"></i></a>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8); /* Transparent black */
  color: white;
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-items {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-items li a {
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  transition: color 0.3s;
  padding: 200px;
}

.nav-items li a:hover {
  color: #aaa;
}
</style>