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

<style scoped>
.about {
    padding: 20px;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

button {
    margin: 0 10px;
    background-color: #000000;
    color: #ffffff;
    border-radius: 8px;
    font-family: monospace, 'Roboto Mono', 'Courier New', Courier;
    font-size: 14px;
    font-style: italic;
    text-align: center;
    border: none;
    transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover, button.active {
    background-color: #ffffff;
    color: #000000;
}

/* Biography Styles */
.biography {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
}

.biography h1, .skills-list h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.biography p {
    font-size: 16px;
    line-height: 1.5;
}

/* Skills List Styles */
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

.category-box h2 {
    font-size: 20px;
    margin-bottom: 5px;
}

.category-box p {
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