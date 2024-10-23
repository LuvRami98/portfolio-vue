<template>
    <div>
      <h1>Buy {{ productName }}</h1>
     
      <p>Add name:</p>
      <input type="text" v-model="name" placeholder="Enter your name">
  
      <p>Add shipping address:</p>
      <input type="text" v-model="address" placeholder="Enter your shipping address">
  
      <p>Add credit card information:</p>
      <input type="number" v-model="creditCard" placeholder="Enter your credit card information">
  
      <p>Add Email:</p>
      <input type="text" v-model="email" placeholder="Enter your email adress">

      <div>
      <button
        :disabled="!isFormComplete" 
        @click="gotoThanks" 
        :class="{'confirm-purchase-enabled': isFormComplete, 'confirm-purchase-disabled': !isFormComplete}"
      >
        Confirm purchase
      </button>
    </div>
    </div>
  </template>
    
  <script>
  export default {
    name: 'Store2View',
    props: ['product'],
    data() {
      return {
        name: '',
        address: '',
        creditCard: '',
        email: '',
      };
    },
    computed: {
      productName() {
        const productNamesMap = {
          coffeeMachine: 'coffee machine',
          vacuumCleaner: 'vacuum cleaner',
          microwave: 'microwave',
        };
        return productNamesMap[this.product] || 'product';
      },
      isFormComplete() {
        return this.name !== '' && this.address !== '' && this.creditCard !== '' && this.email !== '';
      }
    },
    methods: {
      gotoThanks() {
        this.$router.push({ name: 'thanks' });
      }
    }
  };
  </script>
  
  <style scoped>
  .confirm-purchase-disabled {
    background-color: grey;
    cursor: not-allowed;
  }
  
  .confirm-purchase-enabled {
    background-color: #4CAF50;
    cursor: pointer;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    color: white;
    font-size: 16px;
    margin-top: 20px;
  }
  </style>
  