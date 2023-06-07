<template>
  <input
    type="text"
    :value="value"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'TextInput',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    handleInput(e) {
      //updating the data property on the child component (textInput.vue)
      this.value = e.target.value;
      // informing and sending the data property to the parent component (jobSearch.vue)
      // takes two arg ('the event', payload)
      this.$emit('handleInput', this.value);
    },
  },
};
</script>
