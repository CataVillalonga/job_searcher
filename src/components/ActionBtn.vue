<template>
    <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionBtn',
  props:{
    text:{
      type: String,
      required: true
    },
    type:{
      type: String,
      required: false, 
      default:'primary',
      //validator method expects one arg that will represent the props value(in this case is "primary/secundary")
      //in this case we will use this method to check that if any other string is pass in the type prop , an error should be thrown
      validator(value) {
        //validator expects a boolean to be return
        //if value is "error" includes method will return FAlSE and validator will work
        //if value is "primary" and method will return true 
        return['primary','secundary'].includes(value)
      }
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