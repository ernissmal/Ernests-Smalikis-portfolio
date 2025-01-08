<template>
    <BaseBlock :id="id" :section="section">
      <p :class="textClass">{{ content }}</p>
    </BaseBlock>
  </template>
  
  <script>
  import BaseBlock from "./BaseBlock.vue";
  
  export default {
    props: {
      id: String,
      section: String,
      content: {
        type: String,
        required: true,
      },
      textClass: {
        type: String,
        default: "",
      },
    },
    components: { BaseBlock },
  };
  </script>
  