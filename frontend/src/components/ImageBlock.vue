<template>
    <BaseBlock :id="id" :section="section">
      <img :src="src" :alt="alt" :class="imageClass" />
      <p v-if="caption">{{ caption }}</p>
    </BaseBlock>
  </template>
  
  <script>
  import BaseBlock from "./BaseBlock.vue";
  
  export default {
    props: {
      id: String,
      section: String,
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: "Image",
      },
      caption: {
        type: String,
        default: "",
      },
      imageClass: {
        type: String,
        default: "",
      },
    },
    components: { BaseBlock },
  };
  </script>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/portfolio.css"></style>
  