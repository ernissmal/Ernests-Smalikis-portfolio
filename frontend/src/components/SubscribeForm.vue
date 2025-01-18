<template>
    <BaseBlock id="subscribe-form" section="subscribe">
        <h2>Subscribe to our Newsletter</h2>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <button type="submit">Subscribe</button>
        </form>
    </BaseBlock>
</template>

<script>
import BaseBlock from "./BaseBlock.vue";

export default {
    name: 'SubscribeForm',
    components: { BaseBlock },
    data() {
        return {
            email: ''
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            console.log(`Subscribed with email: ${this.email}`);
            // Reset the form
            this.email = '';
        }
    }
};
</script>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/subscribe.css"></style>
