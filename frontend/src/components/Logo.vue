<template>
    <div class="logo">
        <img :src="logoSrc" :alt="altText" />
    </div>
</template>

<script>
export default {
    name: 'Logo',
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
.logo img {
    width: 100px;
    height: auto;
}
</style>

<style src="../assets/css/style.css"></style>