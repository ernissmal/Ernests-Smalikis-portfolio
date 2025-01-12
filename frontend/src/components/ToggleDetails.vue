<template>
    <BaseBlock>
        <button @click="toggleDetails">{{ buttonText }}</button>
        <div v-if="showDetails">
            <slot></slot>
        </div>
    </BaseBlock>
</template>

<script>
import BaseBlock from "./BaseBlock.vue";

export default {
    components: { BaseBlock },
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