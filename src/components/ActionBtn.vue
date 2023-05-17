<template>
  <!-- v-bind to connect to computer property -->
    <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionBtn',

  props:['text','type'],
  computed: {
    buttonClass () {
      return {
        primary : this.type === "primary",
        secondary: this.type === "secondary",
        [this.type]:true //dinamic obj key sntax ( this will translate to "whatever the type prop is":true / same as lines above but way shorter syntax! )
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