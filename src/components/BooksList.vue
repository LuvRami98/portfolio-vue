<template>
    <h2>Books list</h2>

    <p v-for="book in books" :key="book.id">
        <router-link :to=" '/books/' + book.id">{{ book.title }}</router-link>
    </p>
</template>

<script>
export default {
    name: 'booksList',

    data(){
        return {
            books: []
        }
    },

    created(){
        fetch('http://localhost:27307/api/Books')
            .then(data => data.json())
            .then(books => {
                this.books = books
            })
    }
}
</script>