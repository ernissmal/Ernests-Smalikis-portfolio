<template>
    <div class="portfolio">
        <h1>My Portfolio</h1>
        <div class="image-carousel">
            <div class="carousel-container">
                <div 
                    class="carousel-item" 
                    v-for="(project, index) in projects" 
                    :key="index"
                >
                    <div class="project-card">
                        <img :src="project.imageUrl" alt="Project Thumbnail" class="project-thumbnail" />
                        <div class="project-info">
                            <h3 class="project-title">{{ project.title }}</h3>
                            <span class="project-tag">{{ project.description }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="prev" class="carousel-control prev">‹</button>
            <button @click="next" class="carousel-control next">›</button>
        </div>
        <BaseBlock id="projects-section" section="projects">
            <div class="project-box" v-for="project in projects" :key="project.id">
                <div class="project-image">
                    <img :src="project.imageUrl" :alt="project.title">
                </div>
                <div class="project-info">
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                    <a :href="project.link" target="_blank">View project</a>
                </div>
            </div>
        </BaseBlock>
    </div>
</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
    name: 'Portfolio',
    components: {
        BaseBlock
    },
    data() {
        return {
            projects: [
                { id: 1, title: 'Project 1', description: 'Description for project 1', imageUrl: 'image1.jpg', link: '#' },
                { id: 2, title: 'Project 2', description: 'Description for project 2', imageUrl: 'image2.jpg', link: '#' },
                { id: 3, title: 'Project 3', description: 'Description for project 3', imageUrl: 'image3.jpg', link: '#' },
            ],
            currentIndex: 0
        };
    },
    methods: {
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.projects.length;
        },
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
        }
    }
};
</script>


<style src="../assets/css/style.css"></style>
<style src="../assets/css/portfolio.css"></style>