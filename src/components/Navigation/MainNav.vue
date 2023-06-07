<template>
  <!-- mixing existing classes with dinamically changing classes with v-bind -->
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="b mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="navBarItem in navBarItems"
              v-bind:key="navBarItem"
              class="ml-9 h-full first:ml-0"
            >
              <a href="/" class="flex h-full items-center py-2.5">{{ navBarItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-img v-if="isLoggedin" />
          <action-btn v-else @click="loginUser" text="Sign in" type="primary" />
        </div>
      </div>
      <sub-nav v-if="isLoggedin" />
    </div>
  </header>
</template>

<script>
import ActionBtn from '@/components/Shared/ActionBtn.vue';
import ProfileImg from '@/components/Navigation/ProfileImg.vue';
import SubNav from '@/components/Navigation/SubNav.vue';

export default {
  name: 'MainNav',
  components: {
    ActionBtn,
    ProfileImg,
    SubNav,
  },
  data() {
    return {
      company: 'Cata Careers',
      url: 'https://careers.google.com/',
      navBarItems: ['Teams', 'Location', 'Life at Cata Corp', 'How we hire', 'Students', 'Jobs'],
      isLoggedin: false,
    };
  },
  //Dinamically chaging the height of the header for the display of the main component
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedin,
        'h-32': this.isLoggedin,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedin = true;
    },
  },
};
</script>
