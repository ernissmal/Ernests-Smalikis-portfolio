<template>
    <BaseBlock :id="project.id" section="project-card">
        <div class="project-card">
            <img :src="thumbnail" alt="Project Thumbnail" class="project-thumbnail" />
            <div class="project-info">
                <h3 class="project-title">{{ title }}</h3>
                <span class="project-tag">{{ tag }}</span>
            </div>
        </div>
    </BaseBlock>
</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
    name: 'ProjectCard',
    components: {
        BaseBlock
    },
    props: {
        thumbnail: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            required: true
        },
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
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
</style>