<template>
    <div>
      <h2>Loans List</h2>
      <ul>
        <li v-for="loan in loans" :key="loan.id">
          <router-link :to="`/loans/${loan.id}`">{{ new Date(loan.startDate).toLocaleDateString() }}</router-link>
          - {{ loan.title }} ({{ loan.pages }} pages)
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoansList',
    data() {
      return {
        loans: []
      };
    },
    created() {
      fetch('http://localhost:27307/api/Loans')
        .then(response => response.json())
        .then(loans => {
          this.loans = loans.map(loan => {
            return fetch(`http://localhost:27307/api/Books/${loan.bookId}`)
              .then(response => response.json())
              .then(book => ({
                ...loan,
                title: book.title,
                pages: book.pages
              }));
          });
        });
    }
  };
  </script>
  