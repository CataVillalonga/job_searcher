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
          <!-- v-for directive for conditions rendering of components, if the statement inside the directive translate to true then the component will render 
          if the statement translate to false it will not render -->
          <action-btn v-if="true"/>
          <profile-img v-if="false"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionBtn from '@/components/ActionBtn.vue';
import ProfileImg from '@/components//ProfileImg.vue';
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
    };
  }
};
</script>
