<template>
    <div>
      <h2>Blog List</h2>
      <ul class="blogs-list">
        <li v-for="blog in blogs" :key="blog.id">
          <router-link :to="`/blogs/${blog.id}`">{{ blog.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blogs: [],
      };
    },
    async created() {
      console.log('BlogsList component created'); 
      try {
        const response = await fetch('http://localhost:27307/api/Blog');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const blogs = await response.json();
        console.log('Fetched blogs:', blogs); 
        this.blogs = blogs;
      } catch (error) {
        console.error('Error fetching blogs:', error); 
      }
    },
  }
  </script>
  
  <style scoped>
  .blogs-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center; 
  }
  </style>