<template>
  <div
    v-if="onJobResultPage"
    class="border-brand-grey-1 h-16 w-full border-b border-solid bg-white"
  >
    <div class="flex h-full items-center px-8">
      <div>
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="text-brand-green-1">1992 </span>jobs matched</span>
      </div>
    </div>
  </div>
</template>

<script>
//configuration object
export default {
  name: 'SubNav',
  data() {
    return {
      onJobResultPage: true,
    };
  },
};
</script>
