<template>
    <div class="contacts">
        <h1>Contact Us</h1>
        <AddressCard />
        <SocialIcons />
    </div>
</template>

<script>
import SocialIcons from './SocialIcons.vue';
import AddressCard from './AddressCard.vue';

export default {
    name: 'Contacts',
    components: {
        SocialIcons,
        AddressCard
    }
}
</script>

<style scoped>
.contacts {
    text-align: center;
    padding: 20px;
}
</style>