<template>
    <div :id="id" :class="section" class="content-block">
        <slot></slot> <!-- Placeholder for child content -->
        <div v-if="actions.length">
            <button v-for="(action, index) in actions" :key="index" @click="action.handler">
                {{ action.label }}
            </button>
        </div>
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
        actions: {
            type: Array,
            default: () => [] // [{ label: "Click Me", handler: () => alert("Clicked!") }]
        }
    },
};
</script>

<style src="../assets/css/style.css"></style>
