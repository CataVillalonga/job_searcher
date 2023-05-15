<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="b mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for=" navBarItem in navBarItems"  v-bind:key="navBarItem" class="h-full ml-9 first:ml-0">
              <a href="/" class=" flex h-full items-center py-2.5">{{ navBarItem }}</a>
            </li>

          </ul>
        </nav>
        <div class=" ml-auto flex h-full items-center">
          <!-- v-else directive can only be use with a v-if directive (!) and it simulates a if/else statement-->
          <profile-img v-if="isLoggedin"/>
          <action-btn v-else/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionBtn from '@/components/ActionBtn.vue';
import ProfileImg from '@/components/ProfileImg.vue';
export default {
  name: 'MainNav',
  components:{
    ActionBtn,
    ProfileImg
  },
  data() {
    return {
      company: 'Cata Careers',
      url : "https://careers.google.com/",
      navBarItems:["Teams","Location","Life at Cata Corp","How we hire","Students","Jobs"],
      isLoggedin: false
    };
  }
};
</script>
