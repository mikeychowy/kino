<template>
  <autocomplete
  class="mx-5 md:mt-0 mt-2 text-black"
  :search="searchMovies"
  placeholder="Search Movies"
  aria-label="Search Movies"
  :get-result-value="getMoviesTitle"
  @submit="handleSubmit"
  >
  <template #result="{ result, props }">
      <li
        v-bind="props"
        class="autocomplete-result movie-result"
      >
        <div class="movie-title">
          {{ result.title }}
        </div>
        <div class="movie-year">
          Released on {{ $dayjs(result.showTime).format('LL') }}
        </div>
      </li>
    </template>
  </autocomplete>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    searchMovies(input) {
      return new Promise((resolve, reject) => {
        if (input.length < 3) {
          resolve([]);
          return;
        }

        this.$api.get('/', {
          params: {
            limit: 5,
            search: input,
          },
        }).then(({ data }) => {
          resolve(data);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getMoviesTitle(result) {
      return result.title;
    },
    handleSubmit(result) {
      this.$router.push({ path: `/${result.id}` });
    },
  },
};
</script>
