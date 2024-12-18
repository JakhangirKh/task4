<template>
  <div id="app" class="min-h-screen ">

    <nav class=" py-4 px-6">
      <div class="container mx-auto flex justify-between">
        <h1 class="text-2xl font-semibold">Blog</h1>
        <div class="">
          <router-link to="/" class="hover:text-gray-300">Home</router-link>
          <router-link to="/blog-list" class="hover:text-gray-300">Blog List</router-link>
        </div>
      </div>
    </nav>

  
    <div class="container mx-auto p-6">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
