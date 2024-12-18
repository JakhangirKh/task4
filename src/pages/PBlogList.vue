<template>
  <div>
    <h2 class="mx-auto mb-6 text-black">Blog List</h2>
    <ul class="space-y-4">
      <li
        v-for="blog in blogs"
        :key="blog.id"
        class="p-4 bg-white w-[200px]"
      >
        <router-link
          :to="'/blog-detail/' + blog.id"
          class="text-sm"
        >
          {{ blog.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      blogs: [
        { id: 1, title: 'Vue.js Basics', content: 'Introduction to Vue.js' },
        { id: 2, title: 'Vue Router', content: 'Navigating with Vue Router' },
        { id: 3, title: 'Vuex', content: 'State management in Vue.js' },
      ],
    };
  },
};
</script>
