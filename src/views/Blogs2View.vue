<template>
    <div>
      <h1>{{ title }}</h1>
      <p><strong>Summary:</strong> {{ summary }}</p>
      <p><strong>Content:</strong> {{ content }}</p>
      <p><strong>Start Date:</strong> {{ formattedStartDate }}</p>
  
      <button @click="navigateToUpdate">Edit</button>
      <button @click="deleteBlog">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "",
        summary: "",
        content: "",
        startdate: ""
      };
    },
  
    computed: {
      formattedStartDate() {
        return new Date(this.startdate).toLocaleString();
      }
    },
  
    async created() {
      const id = this.$route.params.id;
      console.log('Fetching blog with ID:', id); 
  
      try {
        const response = await fetch(`http://localhost:27307/api/Blog/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const blog = await response.json();
        console.log('Fetched blog:', blog); 
  
        if (blog) {
          this.title = blog.title;
          this.summary = blog.summary;
          this.content = blog.content;
          this.startdate = blog.startDate;
        }
      } catch (error) {
        console.error('Error fetching blog:', error); 
      }
    },
  
    methods: {
      navigateToUpdate() {
        const id = this.$route.params.id;
        console.log('Navigating to edit blog with ID:', id); 
        this.$router.push(`/blogs/${id}/edit`);
      },
  
      async deleteBlog() {
        const id = this.$route.params.id;
        console.log('Deleting blog with ID:', id); 
  
        try {
          const response = await fetch(`http://localhost:27307/api/Blog/${id}`, {
            method: "DELETE"
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          console.log('Blog deleted successfully'); 
          this.$router.push("/blogs");
        } catch (error) {
          console.error('Error deleting blog:', error); 
        }
      }
    }
  }
  </script>
  