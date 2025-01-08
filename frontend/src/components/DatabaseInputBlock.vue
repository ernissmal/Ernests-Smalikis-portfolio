<template>
    <BaseBlock :id="id" :section="section">
      <form @submit.prevent="submitForm">
        <label v-for="(field, index) in fields" :key="index">
          {{ field.label }}
          <input
            :type="field.type"
            :name="field.name"
            :placeholder="field.placeholder"
            v-model="formData[field.name]"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </BaseBlock>
  </template>
  
  <script>
  import BaseBlock from "./BaseBlock.vue";
  
  export default {
    props: {
      id: String,
      section: String,
      fields: {
        type: Array,
        required: true, // [{ label: "Name", type: "text", name: "name", placeholder: "Enter your name" }]
      },
    },
    data() {
      return {
        formData: {},
      };
    },
    methods: {
      submitForm() {
        console.log(this.formData);
        // Add form submission logic
      },
    },
    components: { BaseBlock },
  };
  </script>
  