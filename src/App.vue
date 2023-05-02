<script>
//Vue2WAY of importing and rendering components
import MainNav from '@/components/MainNav.vue';
export default {
  name: 'App',
  components: {
    MainNav //same as : MainNav:MainNav
  }
};
</script>

<template>
  <!-- Both options are valid: -->
  <MainNav />
  <MainNav></MainNav>
  <!--This is use when you want to put something inbetween the tags -->
  <main-nav></main-nav>
  <main-nav />
  <!-- vue also support kebab case no matter how the component is define in the components obj (line7) -->
</template>
