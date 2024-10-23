<template>
    <div class="main-container">
      <div class="container">
        <h2>Väkommen!</h2>
      </div>
  
      <div class="page-container">
        <p><router-link to="/about">Om mig</router-link></p>
        <p><router-link to="/about4">Tidigare arbeten</router-link></p>
        <p><router-link to="/about2">Kontaktuppgifter</router-link></p>
      </div>
      <div>
        <p><router-link to="/">Återvänd till föregående sida</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
  };
  </script>
  
  <style scoped>
  .main-container {
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  
  a {
    text-decoration: none;
    color: #007bff;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  