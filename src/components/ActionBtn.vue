<template>
  <!-- calling the props as a variable in the btn  -->
    <button class="rounded border-0 px-5 py-3 font-medium text-white bg-brand-blue-1 hover:shadow-blue">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionBtn',
  //defining the prop coming from the parent in the child 
  props:["text"]

}
</script>