<template>
    <BaseBlock :id="project.id" section="project-box">
        <div class="project-box">
            <div class="project-image">
                <img :src="project.image" :alt="project.title">
            </div>
            <div class="project-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <a :href="project.link" target="_blank">View project</a>
            </div>
        </div>
    </BaseBlock>
</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
    name: 'ProjectBox',
    components: {
        BaseBlock
    },
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
/* ...existing code... */
</style>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/portfolio.css"></style>