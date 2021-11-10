<template>
  <div class="container mx-auto">
    <div
      v-infinite-scroll="infiniteHandler"
      class="blog-wrapper wrapper-col-1 sm:wrapper-col-2 lg:wrapper-col-3 p-2" :infinite-scroll-disabled="busy" :infinite-scroll-distance="10"
    >
    <template v-if="loading">
      <template v-for="index in 9">
        <BlogPostInitialLoader
        :key="`blog-loaders-${index}`"
        :index="index"
        >
        </BlogPostInitialLoader>
      </template>
    </template>
    <template v-else>
      <template v-for="(item, index) in list">
        <BlogPost
        :key="`blog-list-${index}`"
        :movie-id="item.id"
        :image-url="item.image"
        :show-time="item.showTime"
        :like="item.like"
        :title="item.title"
        >
        </BlogPost>
      </template>
    </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      busy: false,
      list: [],
      loading: true,
      params: {
        page: 1,
        limit: 9,
        sortBy: 'showTime',
        order: 'desc',
      },
      initialParams: {
        page: 1,
        limit: 9,
        sortBy: 'showTime',
        order: 'desc',
      },
    };
  },
  mounted() {
    this.busy = true;
    try {
      this.getMovies().then(({ data }) => {
        this.loading = false;
        if (data.length) {
          this.params.page += 1;
          this.list.push(...data);
          this.busy = false;
        } else {
          this.busy = true;
        }
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      this.busy = true;
    }
  },
  methods: {
    infiniteHandler() {
      if (!this.params.page <= 1) {
        this.busy = false;
        try {
          this.getMovies().then(({ data }) => {
            if (data.length) {
              this.params.page += 1;
              this.list.push(...data);
              this.busy = false;
            } else {
              this.busy = true;
            }
          });
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
          this.busy = true;
        }
      } else {
        this.busy = true;
      }
    },
    getMovies() {
      return new Promise((resolve, reject) => {
        this.$api.get('/', {
          params: this.params,
        }).then((response) => {
          if (response) {
            resolve(response);
          } else {
            const err = 'API ERROR';
            throw err;
          }
        }).catch((err) => {
          reject(err);
        });
      });
    },

  },
};
</script>
