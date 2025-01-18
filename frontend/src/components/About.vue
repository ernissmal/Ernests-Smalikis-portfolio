<template>
    <BaseBlock id="about" section="about" class="about">
        <div class="buttons">
            <button @click="setActiveSection('biography')" 
                    :class="{ active: activeSection === 'biography' }">
                Biography
            </button>
            <button @click="setActiveSection('skillset')" 
                    :class="{ active: activeSection === 'skillset' }">
                Skillset
            </button>
        </div>

        <!-- Biography Section -->
        <div v-if="activeSection === 'biography'" class="biography">
            <h1>{{ biographyTitle }}</h1>
            <p>{{ biographyContent }}</p>
        </div>

        <!-- Skills Section -->
        <div v-else class="skills-list">
            <h1>{{ skillsTitle }}</h1>
            <div v-for="(skills, category) in skillCategories" 
                 :key="category" 
                 class="category-box"
                 @mouseover="toggleCategory(category)" 
                 @mouseleave="toggleCategory(null)">
                <h2>{{ category }}</h2>
                <p v-if="activeCategory === category">{{ skills.join(', ') }}</p>
            </div>
        </div>
    </BaseBlock>
</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
    name: 'About',
    components: { BaseBlock },
    data() {
        return {
            activeSection: 'biography',
            activeCategory: null,
            biographyTitle: 'Biography',
            biographyContent: 'This is a brief biography about the individual.',
            skillsTitle: 'Skills List',
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
        setActiveSection(section) {
            this.activeSection = section;
        },
        toggleCategory(category) {
            this.activeCategory = category;
        }
    }
};
</script>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/about.css"></style>