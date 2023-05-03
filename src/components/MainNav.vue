<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="b mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a href="/" class="flex h-full items-center text-xl">{{ company }}</a>
        <!-- rendering data withing object example  -->
        <h2 class="ml-8 flex h-full items-center">
          developed by {{ author.firstName }} {{ author.lastName }}
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Cata Careers',
      author: {
        firstName: 'catalina',
        lastName: 'Villalonga'
      }
    };
  }
};
</script>
