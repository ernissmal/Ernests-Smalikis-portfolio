<template>
    <BaseBlock class="about">
        <div class="buttons">
            <button @click="setActiveSection('biography')">Biography</button>
            <button @click="setActiveSection('skillset')">Skillset</button>
        </div>
        <ContentRenderer :blocks="activeBlocks" />
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
            activeSection: 'biography',
            blocks: {
                biography: [
                    { type: 'Biography', id: 'bio1', section: 'biography', props: {} }
                ],
                skillset: [
                    { type: 'SkillsList', id: 'skills1', section: 'skillset', props: {} }
                ]
            }
        };
    },
    computed: {
        activeBlocks() {
            return this.blocks[this.activeSection];
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
}
</style>