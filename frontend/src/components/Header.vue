<template>
    <header>
        <Logo />
        <NavMenu />
        <SocialLinks />
    </header>
</template>

<script>
import Logo from './Logo.vue';
import NavMenu from './NavMenu.vue';
import SocialLinks from './SocialLinks.vue';

export default {
    name: 'Header',
    components: {
        Logo,
        NavMenu,
        SocialLinks
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f9fa;
}
</style>
