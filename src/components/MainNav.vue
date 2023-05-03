<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="b mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <!-- Dinamically rendering the company data  -->
        <a href="/" class="flex h-full items-center text-xl">{{ company }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  // rendering  data to the component, if the component is reused , each repetition will have its own copy of the data
  // it is not spread and reuse globally.
  data() {
    return {
      company: 'Cata Careers'
    };
  }
};
</script>
