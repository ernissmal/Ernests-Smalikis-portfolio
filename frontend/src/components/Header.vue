<template>
    <header class="header">
        <Logo />
        <NavMenu />
        <SocialIcons />
    </header>
</template>

<script>
import Logo from './Logo.vue';
import NavMenu from './NavMenu.vue';
import SocialIcons from './SocialIcons.vue';

export default {
    name: 'Header',
    components: {
        Logo,
        NavMenu,
        SocialIcons
    }
}
</script>

<style scoped>
/* Remove existing styles */
</style>
