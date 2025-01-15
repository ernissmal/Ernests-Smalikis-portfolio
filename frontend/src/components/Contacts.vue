<template>
    <div class="contacts">
        <h1>Contact Us</h1>
        <ContentRenderer :blocks="blocks" />
    </div>
</template>

<script>
import ContentRenderer from './ContentRenderer.vue';

export default {
    name: 'Contacts',
    components: {
        ContentRenderer
    },
    data() {
        return {
            blocks: [
                {
                    type: 'BaseBlock',
                    id: 'address-card',
                    section: 'address',
                    props: {
                        name: 'Ernests Smalikis',
                        street: '123 Main St',
                        city: 'Anytown',
                        state: 'CA',
                        zip: '12345'
                    }
                },
                {
                    type: 'SocialIcons',
                    id: 'social-icons',
                    section: 'social'
                }
            ]
        };
    }
}
</script>

<style scoped>
.contacts {
    text-align: center;
    padding: 20px;
}
</style>

<style src="../assets/css/style.css"></style>