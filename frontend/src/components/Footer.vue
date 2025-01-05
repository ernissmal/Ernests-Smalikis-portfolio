<template>
    <footer class="footer">
        <div class="container">
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
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>
.footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

.footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
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
}
</style>