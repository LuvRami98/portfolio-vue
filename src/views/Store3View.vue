<template>
    <div>
      <h1>Thank you for your order</h1>
      <p>An email has been sent to your email address</p>
  
      <div>
        <button @click="returnStore" class="return-button">Return to store</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Store3View',
    methods: {
      returnStore() {
        this.$router.push({ name: 'store' });
      }
    }
  }
  </script>
  
  <style scoped>
  .return-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
  }
  
  .return-button:hover {
    background-color: #45a049;
  }
  </style>
  