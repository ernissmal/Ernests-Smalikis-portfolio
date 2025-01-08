<template>
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
</template>

<script>
export default {
    name: 'ProjectBox',
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>