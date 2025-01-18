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

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #000;
}

.logo img {
    width: 100px;
    height: auto;
}

.nav-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #000;
}

.nav-menu ul {
    list-style: none;
    display: flex;
    gap: 40px;
    padding: 0;
    margin: 0;
}

.nav-menu li {
    font-family: 'Monospace', sans-serif;
}

.nav-menu a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    transition: color 0.3s ease;
}

.nav-menu a:hover {
    text-decoration: underline;
    color: #000000;
    background-color: #fff;
}

.social-icons {
    display: flex;
    gap: 20px;
}

.social-icons a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

.social-icons a:hover {
    text-decoration: underline;
}
</style>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/header-footer.css"></style>
