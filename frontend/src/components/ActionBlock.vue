<template>
    <BaseBlock :id="id" :section="section">
      <button v-for="(action, index) in actions" :key="index" @click="action.handler">
        {{ action.label }}
      </button>
    </BaseBlock>
  </template>
  
  <script>
  import BaseBlock from "./BaseBlock.vue";
  
  export default {
    props: {
      id: String,
      section: String,
      actions: {
        type: Array,
        required: true, // [{ label: "Click Me", handler: () => alert("Clicked!") }]
      },
    },
    components: { BaseBlock },
  };
  </script>
  