<template>
    <div class="social-links">
        <a v-for="link in links" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer">
            {{ link.name }}
        </a>
    </div>
</template>

<script>
export default {
    name: 'SocialLinks',
    data() {
        return {
            links: [
                { name: 'Twitter', url: 'https://twitter.com' },
                { name: 'LinkedIn', url: 'https://linkedin.com' },
                { name: 'GitHub', url: 'https://github.com' },
                { name: 'Instagram', url: 'https://instagram.com' }
            ]
        };
    }
};
</script>

<style scoped>
.social-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
    color: #000;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 10px;
}

.social-links a {
    text-decoration: none;
    color: #000;
    margin: 10px 0;
    transition: color 0.3s;
}

.social-links a:hover {
    color: #555;
}
</style>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/header-footer.css"></style>