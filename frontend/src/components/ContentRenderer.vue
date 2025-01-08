<template>
    <div>
      <component
        v-for="block in blocks"
        :is="block.type"
        :key="block.id"
        v-bind="block.props"
      />
    </div>
  </template>
  
  <script>
  import ActionBlock from "./ActionBlock.vue";
  import TextBlock from "./TextBlock.vue";
  import ImageBlock from "./ImageBlock.vue";
  import DatabaseInputBlock from "./DatabaseInputBlock.vue";
  
  export default {
    components: {
      ActionBlock,
      TextBlock,
      ImageBlock,
      DatabaseInputBlock,
    },
    props: {
      blocks: {
        type: Array,
        required: true, // [{ type: 'ActionBlock', id: '1', section: 'hero', props: { ... } }]
      },
    },
  };
  </script>
  