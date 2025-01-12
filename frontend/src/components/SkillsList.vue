<template>
    <BaseBlock>
        <h2>Skills List</h2>
        <div v-for="(skills, category) in skillCategories" :key="category">
            <h3 @click="toggleCategory(category)">{{ category }}</h3>
            <ul v-if="activeCategory === category">
                <li v-for="skill in skills" :key="skill">{{ skill }}</li>
            </ul>
        </div>
    </BaseBlock>
</template>

<script>
import BaseBlock from "./BaseBlock.vue";

export default {
    components: { BaseBlock },
    data() {
        return {
            activeCategory: null,
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
            this.activeCategory = this.activeCategory === category ? null : category;
        }
    }
};
</script>

<style scoped>
h3 {
    cursor: pointer;
}
</style>