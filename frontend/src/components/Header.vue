<template>
    <header class="header">
        <div class="logo">
            <img :src="logoSrc" :alt="altText" />
        </div>
        <nav class="nav-menu">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="social-icons">
            <a href="https://twitter.com" target="_blank">Twitter</a>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            <a href="https://github.com" target="_blank">GitHub</a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        logoSrc: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            default: 'Logo'
        }
    }
}
</script>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/header-footer.css"></style>
