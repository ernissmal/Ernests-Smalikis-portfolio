<template>
    <div class="portfolio">
        <h1>My Portfolio</h1>
        <ImageCarousel :projects="projects" />
        <BaseBlock id="projects-section" section="projects">
            <ContentRenderer :blocks="projectBlocks" />
        </BaseBlock>
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import ProjectBox from './ProjectBox.vue';
import ImageCarousel from './ImageCarousel.vue';
import ContentRenderer from './ContentRenderer.vue';
import BaseBlock from './BaseBlock.vue';

export default {
    name: 'Portfolio',
    components: {
        ProjectCard,
        ProjectBox,
        ImageCarousel,
        ContentRenderer,
        BaseBlock
    },
    data() {
        return {
            projects: [
                { id: 1, title: 'Project 1', description: 'Description for project 1', imageUrl: 'image1.jpg' },
                { id: 2, title: 'Project 2', description: 'Description for project 2', imageUrl: 'image2.jpg' },
                { id: 3, title: 'Project 3', description: 'Description for project 3', imageUrl: 'image3.jpg' },
            ],
            projectBlocks: [
                {
                    type: 'ProjectCard',
                    id: '1',
                    section: 'projects',
                    props: { project: { id: 1, title: 'Project 1', description: 'Description for project 1' } }
                },
                {
                    type: 'ProjectCard',
                    id: '2',
                    section: 'projects',
                    props: { project: { id: 2, title: 'Project 2', description: 'Description for project 2' } }
                },
                // Add more project blocks as needed
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

<style src="../assets/css/style.css"></style>
<style src="../assets/css/portfolio.css"></style>