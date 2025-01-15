<template>
    <BaseBlock class="about">
        <div class="buttons">
            <button @click="setActiveSection('biography')" :class="{ active: activeSection === 'biography' }">Biography</button>
            <button @click="setActiveSection('skillset')" :class="{ active: activeSection === 'skillset' }">Skillset</button>
        </div>
        <component :is="activeComponent" />
    </BaseBlock>
</template>

<script>
import Biography from './Biography.vue';
import SkillsList from './SkillsList.vue';
import ToggleDetails from './ToggleDetails.vue';
import BaseBlock from './BaseBlock.vue';
import ContentRenderer from './ContentRenderer.vue';

export default {
    name: 'About',
    components: {
        Biography,
        SkillsList,
        ToggleDetails,
        BaseBlock,
        ContentRenderer
    },
    data() {
        return {
            activeSection: 'biography'
        };
    },
    computed: {
        activeComponent() {
            return this.activeSection === 'biography' ? 'Biography' : 'SkillsList';
        }
    },
    methods: {
        setActiveSection(section) {
            this.activeSection = section;
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
button:hover {
    background-color: #ffffff;
    color: #000000;
}
button.active {
    background-color: #ffffff;
    color: #000000;
}
</style>

<style src="../assets/css/style.css"></style>