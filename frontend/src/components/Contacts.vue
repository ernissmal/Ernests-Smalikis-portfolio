<template>
    <div class="contacts">
        <h1>Contact me</h1>
        <BaseBlock id="address-card" section="address">
            <h2>{{ address.name }}</h2>
            <p>{{ address.street }}</p>
            <p>{{ address.city }}, {{ address.state }} {{ address.zip }}</p>
        </BaseBlock>
        <BaseBlock id="social-icons" section="social">
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
        </BaseBlock>
    </div>
</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
    name: 'Contacts',
    components: {
        BaseBlock
    },
    data() {
        return {
            address: {
                name: 'Ernests Smalikis',
                street: '123 Main St',
                city: 'Anytown',
                state: 'CA',
                zip: '12345'
            }
        };
    }
}
</script>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/contacts.css"></style>