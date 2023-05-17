<template>
  <!-- v-bind to connect to computer property -->
    <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionBtn',
  //props can have configuration setting obj
  props:{
    text:{
      type: String,
      required: true // if set to true the text prop is mandatory
    },
    type:{
      type: String,
      required: false, // if set to true the text prop is optional
      default:'primary' // sets the optional(required:false) to default to X value if prop is not speficied
    }
  },
  computed: {
    buttonClass () {
      return {
        [this.type]:true,
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
  @apply bg-transparent text-brand-blue-1  hover:bg-brand-blue-2 hover:text-white
}
</style>