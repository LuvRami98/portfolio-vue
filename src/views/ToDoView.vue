<template>
    <div>
      <h1>To-Do List</h1>
      <input v-model="newTodo" placeholder="Add a new to-do" @keyup.enter="addTodo" />
      <ul class="todo-list">
        <li v-for="(todo, index) in todos" :key="index" class="todo-item">
          <button @click="toggleCompleted(todo)" class="completed-btn">
            {{ todo.completed ? "☑️" : "⬜️" }}
          </button>
  
          <router-link :to="`/todo/${todo.id}`" class="todo-title" :class="{ completed: todo.completed }">
            {{ todo.title }}
          </router-link>

          <p class="todo-date">{{ formatDate(todo.date) }}</p>
  
          <button @click="removeTodo(todo.id)" class="delete-btn">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: "",
        todos: [],
      };
    },
    methods: {
      async fetchTodos() {
        const response = await fetch("http://localhost:27307/api/ToDo");
        const data = await response.json();
        this.todos = data;
      },
      async addTodo() {
        if (this.newTodo.trim() !== "") {
          const newTodo = {
            title: this.newTodo,
            date: new Date().toISOString(),
            completed: false,
          };
          await fetch("http://localhost:27307/api/ToDo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
          });
          this.newTodo = "";
          this.fetchTodos();
        }
      },
      async removeTodo(id) {
        await fetch(`http://localhost:27307/api/ToDo/${id}`, {
          method: "DELETE",
        });
        this.fetchTodos();
      },
      toggleCompleted(todo) {
        todo.completed = !todo.completed;
      },
      formatDate(date) {
        return new Date(date).toLocaleDateString();
      },
    },
    created() {
      this.fetchTodos();
    },
  };
  </script>
  
  <style scoped>
  .todo-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center; 
  }
  
  .todo-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
    max-width: 300px; 
    text-align: center; 
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .completed-btn {
    margin-bottom: 10px;
    font-size: 1.5em;
    cursor: pointer;
  }
  
  .todo-title {
    font-size: 1.2em;
    margin: 5px 0;
    cursor: pointer;
  }
  
  .completed {
    text-decoration: line-through;
  }
  
  .todo-date {
    font-size: 0.9em;
    color: gray;
    margin-top: 5px;
  }
  
  .delete-btn {
    margin-top: 10px;
    font-size: 0.9em;
    cursor: pointer;
    background-color: #ff4d4d;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
  }
  
  .delete-btn:hover {
    background-color: #ff3333;
  }
  </style>
  