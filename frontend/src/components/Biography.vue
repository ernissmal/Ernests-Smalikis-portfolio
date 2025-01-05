<template>
    <div class="biography">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
    name: 'Biography',
    data() {
        return {
            title: 'Biography',
            content: 'This is a brief biography about the individual.'
        };
    }
};
</script>

<style scoped>
.biography {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
}

.biography h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.biography p {
    font-size: 16px;
    line-height: 1.5;
}
</style>