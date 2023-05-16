<template>
  <!-- v-bind to connect to computer property -->
    <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionBtn',
  props:["text"],
  data() {
    return {
      primary: true
    }
  },
  // defining computed property 
  computed: {
    buttonClass () {
      return {
        primary : this.primary
      }
    }
  }
}
</script>

<style scoped>
button{
 @apply rounded px-5 py-3 font-medium;
}
.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue
}

.secondary {

}
</style>