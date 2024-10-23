<template>
    <div>
      <h1>Edit Loan</h1>
      <p>
        <label for="startDate">Start Date:</label>
        <input type="datetime-local" id="startDate" v-model="startDate">
      </p>
      <button @click="updateLoan">Update</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        startDate: ""
      };
    },
    created() {
      const id = this.$route.params.id;
      fetch(`http://localhost:27307/api/Loans/${id}`)
        .then(response => response.json())
        .then(loan => {
          if (loan.startDate) {
            this.startDate = new Date(loan.startDate).toISOString().slice(0, 16);  
          }
        })
        .catch(error => console.error('Error:', error));
    },
    methods: {
  updateLoan() {
    const id = this.$route.params.id;

    fetch(`http://localhost:27307/api/Loans/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        bookId: this.loan.bookId,  
        startDate: this.loan.startDate,
        borrowerId: this.loan.borrowerId
      })
    })
    .then(() => this.$router.push('/loans'))
    .catch(error => console.error('Error:', error));
  }
}

  };
  </script>
  