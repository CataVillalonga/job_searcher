<template>
  <form class="border-brand-grey-3 flex h-12 w-full items-center rounded-3xl border border-solid">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute -top-10 left-0">Role</label>
        <input
          type="text"
          :value="role"
          @:input="updateRole"
          placeholder="software engineer"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
      <span
        class="border-brand-grey-3 bg-brand-grey-2 flex h-full items-center border-l border-r px-3"
      >
        in
      </span>
      <div class="relative flex h-full flex-1 items-center pl-3">
        <label class="absolute -top-10 left-0">Where?</label>
        <input
          type="text"
          :value="location"
          @:input="updatelocation"
          placeholder="Stockholm"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
    </div>
    <action-btn text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionBtn from '@/components/ActionBtn.vue';
export default {
  name: 'JobSearchForm',
  components: {
    ActionBtn,
  },
  data() {
    return {
      role: '',
      location: '',
    };
  },
  methods: {
    updateRole(e) {
      this.role = e.target.value;
    },
    updatelocation(e) {
      this.location = e.target.value;
    },
  },
};
</script>
