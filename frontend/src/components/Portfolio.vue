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

<style scoped>
.portfolio {
    padding: 20px;
}

.projects {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

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

.project-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.project-card:hover {
    transform: scale(1.05);
}

.project-thumbnail {
    width: 100%;
    height: auto;
}

.project-info {
    padding: 16px;
}

.project-title {
    margin: 0;
    font-size: 1.25rem;
    color: #333;
}

.project-tag {
    display: inline-block;
    margin-top: 8px;
    padding: 4px 8px;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    font-size: 0.875rem;
}

.project-box {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.project-box:hover {
    transform: scale(1.05);
}

.project-image img {
    width: 100%;
    height: auto;
}

.project-info {
    padding: 16px;
}

.project-info h3 {
    margin: 0;
    font-size: 1.25rem;
    color: #333;
}

.project-info p {
    margin: 8px 0;
    color: #666;
}

.project-info a {
    color: #007bff;
    text-decoration: none;
}
</style>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/portfolio.css"></style>