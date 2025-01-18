<template>
    <BaseBlock :id="id" :section="section">
        <h1>{{ title }}</h1>
        <div v-for="(skills, category) in skillCategories" :key="category" class="category-box" @mouseover="toggleCategory(category)" @mouseleave="toggleCategory(null)">
            <h2>{{ category }}</h2>
            <p v-if="activeCategory === category">{{ skills.join(', ') }}</p>
        </div>
    </BaseBlock>
</template>

<script>
import BaseBlock from "./BaseBlock.vue";

export default {
    components: { BaseBlock },
    props: {
        id: {
            type: String,
            required: true,
        },
        section: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            activeCategory: null,
            title: 'Skills List',
            skillCategories: {
                Frontend: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'React'],
                Backend: ['Node.js', 'Express', 'Django', 'Flask'],
                Software: ['Design Patterns', 'OOP', 'Agile'],
                AI: ['Machine Learning', 'Deep Learning', 'NLP'],
                Scripting: ['Python', 'Bash', 'Perl'],
                Hardware: ['Arduino', 'Raspberry Pi'],
                VersionControl: ['Git', 'SVN']
            }
        };
    },
    methods: {
        toggleCategory(category) {
            this.activeCategory = category;
        }
    }
};
</script>

<style scoped>
.skills-list {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
}

.skills-list h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.category-box {
    background-color: transparent;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    transition: border 0.3s ease, background-color 0.3s ease;
}

.category-box:hover {
    border: 2px solid #ddd;
    background-color: rgba(240, 240, 240, 0.1);
}

.skills-list h2 {
    font-size: 20px;
    margin-bottom: 5px;
}

.skills-list p {
    font-size: 16px;
    line-height: 1.5;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.category-box:hover p {
    opacity: 1;
}
</style>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/about.css"></style>