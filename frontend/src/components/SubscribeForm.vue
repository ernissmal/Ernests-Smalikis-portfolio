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

<style scoped>
.subscribe-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="email"] {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
