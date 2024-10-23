<template>
    <h1>Loans</h1>
  
    <ul>
      <li v-for="loan in loans" :key="loan.id">
        <router-link :to="'/loans/' + loan.id">
          {{ loan.startDate ? new Date(loan.startDate).toLocaleDateString() : 'Unknown Date' }} 
          - 
          {{ loan.book ? loan.book.title : 'Unknown Book' }} 
          ({{ loan.book && loan.book.pages ? loan.book.pages + ' pages' : 'Unknown Pages' }})
        </router-link>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loans: []
      }
    },
    created() {
      fetch('http://localhost:27307/api/Loans')
        .then(response => response.json())
        .then(loans => {
          const bookPromises = loans.map(loan => {
            if (loan.bookId && loan.bookId !== 0) { 
              return fetch('http://localhost:27307/api/Books/' + loan.bookId)
                .then(response => response.json())
                .then(book => {
                  loan.book = book;
                  return loan;
                })
                .catch(error => {
                  console.error('Error fetching book data:', error);
                  loan.book = null;
                  return loan;
                });
            } else {
              loan.book = null; 
              return loan;
            }
          });
  
          Promise.all(bookPromises).then(updatedLoans => {
            this.loans = updatedLoans;
          });
        })
        .catch(error => {
          console.error('Error fetching loans:', error);
        });
    }
  }
  </script>
  
  <style scoped>
  li {
    list-style: none;
    margin-bottom: 10px;
  }
  </style>
  