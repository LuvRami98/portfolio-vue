<template>
    <div>
      <h1>Blogs</h1>
  
      <BlogsList :key="blogsKey" ref="blogsList" />
  
      <p>
        <input type="text" placeholder="Title" v-model="title" /> <br />
        <input type="text" placeholder="Summary" v-model="summary" /> <br />
        <input type="text" placeholder="Content" v-model="content" /> <br />
        <input type="datetime-local" placeholder="Date/Time" v-model="startdate" /> <br />
        <button @click="saveBlog">Save</button>
      </p>
    </div>
  </template>
  
  <script>
  import BlogsList from '@/components/BlogsList.vue';
  
  export default {
    components: {
      BlogsList
    },
  
    data() {
      return {
        title: "",
        summary: "",
        content: "",
        startdate: "",
        blogsKey: 0
      }
    },
  
    methods: {
      async saveBlog() {
        console.log('saveBlog method triggered'); 
        const blog = {
          title: this.title,
          summary: this.summary,
          content: this.content,
          startdate: new Date(this.startdate).toISOString() 
        }
        console.log('Blog data to save:', blog); 
  
        try {
          const response = await fetch('http://localhost:27307/api/Blog', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: { 'Content-Type': 'application/json' }
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const result = await response.json();
          console.log('Blog saved successfully:', result); 
          this.$refs.blogsList.fetchBlogs(); 
        } catch (error) {
          console.error('Error saving blog:', error); 
        }
      }
    }
  }
  </script>
  