<template>
    <div class="portfolio">
        <h1>My Portfolio</h1>
        <ImageCarousel />
        <div class="projects">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import ImageCarousel from './ImageCarousel.vue';

export default {
    name: 'Portfolio',
    components: {
        ProjectCard,
        ImageCarousel
    },
    data() {
        return {
            projects: [
                { id: 1, title: 'Project 1', description: 'Description for project 1' },
                { id: 2, title: 'Project 2', description: 'Description for project 2' },
                // Add more projects as needed
            ]
        };
    }
};
</script>

<style scoped>
.portfolio {
    padding: 20px;
}

.projects {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>