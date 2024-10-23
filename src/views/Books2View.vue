<template>
    <h1>Single Book</h1>

    <input type="text" v-model="title" placeholder="Title"> <br>
    <input type="number" v-model="pages" placeholder="Pages"> <br>

    <button @click="updateBook">Update</button>
    <button @click="deleteBook">Delete</button>
</template>

<script>
export default {
    data(){
        return{
            title: "",
            pages: ""
        }
    },

    created(){
        const id = this.$route.params.id
        
        fetch('http://localhost:27307/api/Books/' + id)
            .then(data => data.json())
            .then(book => {
                this.title = book.title
                this.pages = book.pages
            })
    },

    methods: {
        updateBook(){
            const book = {
                title: this.title,
                pages: this.pages
            }
            const id = this.$route.params.id;

            fetch('http://localhost:27307/api/Books/' + id, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify(book)
            })
            .then(() => {
                this.$router.push('/books')
            })
        },

        deleteBook(){
            const id = this.$route.params.id;

            fetch('http://localhost:27307/api/Books/' + id, {
                method: 'DELETE'
            })
            .then(() => {
                this.$router.push('/books')
            })
        }
    }
}
</script>