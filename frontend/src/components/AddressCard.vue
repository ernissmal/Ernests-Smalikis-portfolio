<template>
    <div class="address-card">
        <h2>{{ name }}</h2>
        <p>{{ street }}</p>
        <p>{{ city }}, {{ state }} {{ zip }}</p>
    </div>
</template>

<script>
export default {
    name: 'AddressCard',
    props: {
        name: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.address-card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    max-width: 300px;
    margin: 16px auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.address-card h2 {
    margin: 0 0 8px;
    font-size: 1.5em;
}
.address-card p {
    margin: 4px 0;
}
</style>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/contacts.css"></style>