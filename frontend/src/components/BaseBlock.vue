<template>
    <div :id="id" :class="section" class="content-block">
        <slot></slot> <!-- Placeholder for child content -->
    </div>
</template>

<script>
export default {
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
};
</script>

<style scoped>
.content-block {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>

<style src="../assets/css/style.css"></style>
