<template>
    <div class="social-icons">
        <a href="https://www.linkedin.com/in/ernestssmalikis" target="_blank">
            <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ernestssmalikis" target="_blank">
            <i class="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/ernestssmalikis" target="_blank">
            <i class="fab fa-twitter"></i>
        </a>
    </div>
</template>

<script>
export default {
    name: 'SocialIcons'
}
</script>

<style scoped>
.social-icons {
    display: flex;
    gap: 10px;
}

.social-icons a {
    color: #333;
    font-size: 24px;
    transition: color 0.3s;
}

.social-icons a:hover {
    color: #0073b1; /* LinkedIn color */
}
</style>

<style src="../assets/css/global.css"></style>
<style src="../assets/css/contacts.css"></style>