<template>
    <BaseBlock :id="id" :section="section">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
    </BaseBlock>
</template>

<script>
import BaseBlock from "./BaseBlock.vue";

export default {
    components: { BaseBlock },
    props: {
        id: {
            type: String,
            required: true,
        },
        section: {
            type: String,
            required: true,
        },
    },
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

<style src="../assets/css/global.css"></style>
<style src="../assets/css/about.css"></style>