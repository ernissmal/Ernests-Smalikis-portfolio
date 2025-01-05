<template>
    <div>
        <button @click="toggleDetails">{{ buttonText }}</button>
        <div v-if="showDetails">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDetails: false
        };
    },
    computed: {
        buttonText() {
            return this.showDetails ? 'Hide Details' : 'Show Details';
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        }
    }
};
</script>

<style scoped>
button {
    margin-bottom: 10px;
}
</style>