<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="b mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
          <!-- v-for directive example (for iterations , same as loops or map func) -->
            <li class="h-full ml-9" v-for=" navBarItem in navBarItems">
              <!-- dinamically calling items on array to create navbar -->
              <a href="/" class=" flex h-full items-center py-2.5">{{ navBarItem }}</a>
            </li>

          </ul>
        </nav>
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
      url : "https://careers.google.com/",
      navBarItems:["Teams","Location","Life at Cata Corp","How we hire","Students","Jobs"],
    };
  }
};
</script>
