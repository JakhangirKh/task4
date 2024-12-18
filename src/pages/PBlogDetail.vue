<template>
  <div class="max-w-2xl mx-auto bg-white p-6">
    <h2 class="text-3xl font-bold mb-4 text-black">{{ blog?.title }}</h2>
    <p class="text-gray-700 text-lg mb-6">{{ blog?.content }}</p>
    <router-link
      to="/blog-list"
      class="inline-block text-black hover:underline"
    >
    Back
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  props: ['id'],
  data() {
    return {
      blogs: [
        { id: 1, title: 'Vue.js Basics', content: 'Introduction to Vue.js' },
        { id: 2, title: 'Vue Router', content: 'Navigating with Vue Router' },
        { id: 3, title: 'Vuex', content: 'State management in Vue.js' },
      ],
    };
  },
  computed: {
    blog() {
      return this.blogs.find((b) => b.id === parseInt(this.id));
    },
  },
};
</script>
