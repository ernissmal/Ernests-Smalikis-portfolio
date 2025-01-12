<template>
    <BaseBlock class="about">
        <Biography />
        <SkillsList />
        <ToggleDetails />
    </BaseBlock>
</template>

<script>
import Biography from './Biography.vue';
import SkillsList from './SkillsList.vue';
import ToggleDetails from './ToggleDetails.vue';
import BaseBlock from './BaseBlock.vue';

export default {
    name: 'About',
    components: {
        Biography,
        SkillsList,
        ToggleDetails,
        BaseBlock
    }
}
</script>

<style scoped>
.about {
    padding: 20px;
}
</style>