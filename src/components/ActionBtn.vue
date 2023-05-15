<template>
  <!-- using v-on(whatevent) to refence the handleClick method inside html element to react to a user event (click on this case)-->
    <button class="rounded border-0 px-5 py-3 font-medium text-white bg-brand-blue-1 hover:shadow-blue" @click="handleClick">Sign in</button>
</template>

<script>
export default {
  name: 'ActionBtn',
  // defining "methods" AKA functions to be use in the component
  methods: {
    handleClick() {
      console.log('Btn clicked!')
    }
  }
}
</script>