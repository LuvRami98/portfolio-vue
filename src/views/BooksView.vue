<template>
    <div>
      <h1>Books and Loans</h1>
      <div>
        <button @click="viewBooks">Books</button>
        <router-link to="/loans">
          <button>View Loans</button>
        </router-link>
      </div>
      <BooksList v-if="currentView === 'books'" :key="booksKey" />
      <p>
        <input type="text" placeholder="Title" v-model="title"> <br>
        <input type="number" placeholder="Pages" v-model="pages"> <br>
        <button @click="saveBook">Save</button>
      </p>
    </div>
  </template>
  
  <script>
  import BooksList from '@/components/BooksList.vue';
  
  export default {
    components: {
      BooksList
    },
    data() {
      return {
        title: "",
        pages: "",
        booksKey: 0,
        currentView: 'books'
      };
    },
    methods: {
      viewBooks() {
        this.currentView = 'books';
      },
      saveBook() {
        const book = {
          title: this.title,
          pages: this.pages
        };
        fetch('http://localhost:27307/api/Books', {
          method: 'POST',
          body: JSON.stringify(book),
          headers: { 'Content-Type': 'application/json' }
        }).then(() => {
          this.booksKey++;
        });
      }
    }
  };
  </script>
  