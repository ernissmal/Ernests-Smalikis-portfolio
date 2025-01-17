<template>
    <div class="image-carousel">
        <div class="carousel-container">
            <div 
                class="carousel-item" 
                v-for="(project, index) in projects" 
                :key="index"
            >
                <ProjectCard :project="project" />
            </div>
        </div>
        <button @click="prev" class="carousel-control prev">‹</button>
        <button @click="next" class="carousel-control next">›</button>
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'ImageCarousel',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [
                // Add your project data here
                { id: 1, title: 'Project 1', description: 'Description 1', imageUrl: 'image1.jpg' },
                { id: 2, title: 'Project 2', description: 'Description 2', imageUrl: 'image2.jpg' },
                { id: 3, title: 'Project 3', description: 'Description 3', imageUrl: 'image3.jpg' },
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

<style scoped>
.image-carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.carousel-container {
    display: flex;
    transition: transform 0.5s ease;
    transform: translateX(-100%);
}

.carousel-item {
    min-width: 100%;
    box-sizing: border-box;
}

.carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}

.carousel-control.prev {
    left: 10px;
}

.carousel-control.next {
    right: 10px;
}
</style>

<style src="../assets/css/global.css"></style>
<style src="../assets/css/portfolio.css"></style>