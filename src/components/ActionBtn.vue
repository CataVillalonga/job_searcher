<template>
  <!-- using v-bind to dinamically select styles within obj definition
   connects the css class declaration to the data property value primary-->
    <button :class="{primary:primary}">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionBtn',
  //defining the prop(s) coming from the parent in the child 
  props:["text"],
  data() {
    return {
      primary: true
    }
  },
}
</script>
<!-- Adding scoped attr. to make sure styles stay in the component ( as css can be global) -->
<style scoped>
/* @apply is a tailwing directive that lets you write tailwing classes within our css declarations */
button{
 @apply rounded px-5 py-3 font-medium;
}
.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue
}

.secondary {

}
</style>