<template>
    <nav class="nav-menu">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavMenu'
}
</script>

<style scoped>
.nav-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: #000;
}

.nav-menu ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
}

.nav-menu li {
    font-family: 'Monospace', sans-serif;
}

.nav-menu a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    transition: color 0.3s ease;
}

.nav-menu a:hover {
    color: #ccc;
}
</style>