<template>
  <header
      class="
        md:flex
        items-center
        justify-between
        py-3
        md:py-4
        bg-indigo-700
        relative
        text-gray-50
      "
    >
      <div class="flex justify-between min-w-min px-4">
        <div class="flex text-3xl font-normal relative items-center">
          <img class="h-10 w-10 mb-2" src="~/assets/kino-logo.svg" alt="Kino Logo">
          <NuxtLink :to="'/'">Kino</NuxtLink>
        </div>
      </div>
      <SearchBar></SearchBar>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isHidden: true,
    };
  },
  methods: {
    toggleMenu() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>
