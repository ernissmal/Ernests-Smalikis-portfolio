<template>
    <section id="about">
        <div class="profile-frame">
            <div class="profile-content">
                <h1>Ernests Smalikis</h1>
                <p>Passionate programmer <em>&</em> developer</p>
                <button id="show-more-button" @click="toggleShowMore">{{ showMoreText }}</button>
            </div>
            <div class="hidden-content" :class="{ 'show-more-animation': showMore }">
                <!-- ...existing code... -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            showMore: false
        };
    },
    computed: {
        showMoreText() {
            return this.showMore ? 'Show Less' : 'Show More';
        }
    },
    methods: {
        toggleShowMore() {
            this.showMore = !this.showMore;
        }
    }
}
</script>

<style scoped>
.about-section {
  padding: 5rem 2rem;
  text-align: center;
}

.profile h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.profile p {
  font-size: 1.2rem;
  color: #aaa;
}

.details {
  margin-top: 1rem;
  animation: fadeIn 0.5s ease-in-out;
}
</style>