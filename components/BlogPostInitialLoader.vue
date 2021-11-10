<template>
  <div class="blog-post w-full overflow-none border rounded-md">
    <content-loader
    :width="368"
    :height="327.88"
    :speed="2.5"
    :unique-key="`blog-loader-${index}`"
    primary-color="#f3f3f3"
    secondary-color="#ecebeb"
    >
      <rect x="0" y="0" rx="2" ry="2" width="368" height="205" />
      <rect x="15" y="220" rx="3" ry="3" width="181" height="20" />
      <rect x="15" y="250" rx="3" ry="3" width="334" height="36" />
      <rect x="15" y="295" rx="3" ry="3" width="168" height="18" />
    </content-loader>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

export default {
  name: 'BlogPostInitialLoader',
  components: {
    ContentLoader,
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>
