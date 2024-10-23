<template>
    <div>
      <h1>Edit Blog Post</h1>
  
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" /> <br />
  
      <label for="summary">Summary</label>
      <input type="text" id="summary" v-model="summary" /> <br />
  
      <label for="content">Content</label>
      <textarea id="content" v-model="content"></textarea> <br />
  
      <label for="startdate">Start Date</label>
      <input type="datetime-local" id="startdate" v-model="startdate" /> <br />
  
      <button @click="updateBlog">Update</button>
  
      <p v-if="updateMessage">{{ updateMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "",
        summary: "",
        content: "",
        startdate: "",
        updateMessage: ""
      };
    },
  
    async created() {
      const id = this.$route.params.id;
      console.log('Fetching blog data for edit with ID:', id); 
  
      try {
        const response = await fetch(`http://localhost:27307/api/Blog/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const blog = await response.json();
        console.log('Fetched blog for editing:', blog); 
  
        if (blog) {
          this.title = blog.title;
          this.summary = blog.summary;
          this.content = blog.content;
          this.startdate = new Date(blog.startDate).toISOString().slice(0, 16); 
        }
      } catch (error) {
        console.error('Error fetching blog for edit:', error); 
      }
    },
  
    methods: {
      async updateBlog() {
        const blog = {
          title: this.title,
          summary: this.summary,
          content: this.content,
          startdate: new Date(this.startdate).toISOString()
        };
        const id = this.$route.params.id;
        console.log('Updating blog with ID:', id, 'Data:', blog); 
  
        try {
          const response = await fetch(`http://localhost:27307/api/Blog/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
          });
  
          if (response.ok) {
            this.updateMessage = "Update Successful!";
            console.log('Blog updated successfully'); 
            setTimeout(() => {
              this.$router.push("/blogs"); 
            }, 2000);
          } else {
            throw new Error("Failed to update blog");
          }
        } catch (error) {
          console.error('Error updating blog:', error); 
          this.updateMessage = "Failed to update blog";
        }
      }
    }
  }
  </script>
  