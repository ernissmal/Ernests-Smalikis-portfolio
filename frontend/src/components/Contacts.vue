<template>
    <div class="contacts">
        <h1>Contact me</h1>
        <div class="address-card">
            <h2>{{ address.name }}</h2>
            <p>{{ address.street }}</p>
            <p>{{ address.city }}, {{ address.state }} {{ address.zip }}</p>
        </div>
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
    </div>
</template>

<script>
export default {
    name: 'Contacts',
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

<style scoped>
.contacts {
    text-align: center;
    padding: 20px;
}

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

.social-icons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
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

<style src="../assets/css/style.css"></style>
<style src="../assets/css/contacts.css"></style>