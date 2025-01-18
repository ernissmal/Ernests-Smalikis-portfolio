<template>
    <BaseBlock id="footer" section="footer">
        <div class="footer-content">
            <p>&copy; 2023 Ernests Smalikis. All rights reserved.</p>
            <nav class="footer-nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </BaseBlock>
</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
    name: 'Footer',
    components: {
        BaseBlock
    }
}
</script>

<style scoped>
.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: transparent;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

.footer-content p {
    margin: 0;
}

.footer-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.footer-nav li {
    margin: 0 10px;
}

.footer-nav a {
    color: #fff;
    text-decoration: none;
}

.footer-nav a:hover {
    text-decoration: underline;
    color: #000000;
}
</style>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/header-footer.css"></style>