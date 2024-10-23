<template>
    <div class="main-container">
      <div class="section-box">
        <h2>Kontaktinfo:</h2>
        <p>Telefonnummer: +46 762 138 896</p>
        <p>Email: harald.vonheijne@gmail.com</p>
      </div>
  
      <div class="section-box return-container">
        <p><router-link to="/about3">Återvänd till föregående sida</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
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
  
  .section-box {
    background-color: #f9f9f9;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 20px;
    text-align: left;
  }
  
  a {
    text-decoration: none;
    color: #007bff;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  