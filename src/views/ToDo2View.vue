<template>
    <div v-if="todo">
      <h1>Edit To-Do: {{ todo.title }}</h1>
  
      <form @submit.prevent="updateTodo">
        <div>
          <label for="title">Title:</label>
          <input id="title" v-model="todo.title" />
        </div>
  
        <div>
          <label for="date">Date:</label>
          <input id="date" type="date" v-model="formattedDate" />
        </div>
  
        <button type="submit">Save Changes</button>
      </form>
  
      <button @click="goBack">Back to List</button>
    </div>
  
    <div v-else>
      <p>Loading to-do item...</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        todo: null, 
      };
    },
    computed: {
      formattedDate: {
        get() {
          return this.todo && this.todo.date ? new Date(this.todo.date).toISOString().split('T')[0] : '';
        },
        set(value) {
          this.todo.date = new Date(value).toISOString();
        }
      }
    },
    methods: {
      async fetchTodo() {
        const id = this.$route.params.id;
        const response = await fetch(`http://localhost:27307/api/ToDo/${id}`);
        this.todo = await response.json();
      },
      async updateTodo() {
        const id = this.$route.params.id;
        await fetch(`http://localhost:27307/api/ToDo/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.todo)
        });
        this.$router.push("/todo"); 
      },
      goBack() {
        this.$router.push("/todo");
      }
    },
    created() {
      this.fetchTodo();
    }
  };
  </script>
  
  <style scoped>
  form {
    margin-bottom: 1em;
  }
  button {
    margin-top: 1em;
  }
  </style>
  