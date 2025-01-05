<template>
    <div class="about">
        <Biography />
        <SkillsList />
        <ToggleDetails />
    </div>
</template>

<script>
import Biography from './Biography.vue';
import SkillsList from './SkillsList.vue';
import ToggleDetails from './ToggleDetails.vue';

export default {
    name: 'About',
    components: {
        Biography,
        SkillsList,
        ToggleDetails
    }
}
</script>

<style scoped>
.about {
    padding: 20px;
}
</style>