<template>
    <div>
      <h1>Electronics Store</h1>
      
      <div class="product-container">
        <div class="product microwave">
          <img :src="microwaveImage" alt="Microwave" class="product-image" />
          <button @click="toggleImage('microwave')" class="arrow-button">
            <img :src="arrowDirection('microwave')" alt="Toggle Arrow" class="arrow" />
          </button>
          <button @click="buyForm('microwave')" class="buy-form">Buy</button>
        </div>
        
        <div class="product coffee-machine">
          <img :src="coffeeMachineImage" alt="Coffee Machine" class="product-image" />
          <button @click="toggleImage('coffeeMachine')" class="arrow-button">
            <img :src="arrowDirection('coffeeMachine')" alt="Toggle Arrow" class="arrow" />
          </button>
          <button @click="buyForm('coffeeMachine')" class="buy-form">Buy</button>
        </div>
        
        <div class="product vacuum-cleaner">
          <img :src="vacuumCleanerImage" alt="Vacuum Cleaner" class="product-image" />
          <button @click="toggleImage('vacuumCleaner')" class="arrow-button">
            <img :src="arrowDirection('vacuumCleaner')" alt="Toggle Arrow" class="arrow" />
          </button>
          <button @click="buyForm('vacuumCleaner')" class="buy-form">Buy</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
    name: 'StoreView',
    data() {
      return {
        currentImages: {
          microwave: 1,
          coffeeMachine: 1,
          vacuumCleaner: 1,
        },
        images: {
          microwave: [require('@/assets/microwave2.png'), require('@/assets/microwave3.jpg')],
          coffeeMachine: [require('@/assets/coffee_machine2.png'), require('@/assets/coffee_machine3.jpg')],
          vacuumCleaner: [require('@/assets/vacuum_cleaner2.png'), require('@/assets/vacuum_cleaner3.jpg')],
        },
        arrowLeft: require('@/assets/arrow_left.png'),
        arrowRight: require('@/assets/arrow_right.png'),
      };
    },
    computed: {
      microwaveImage() {
        return this.images.microwave[this.currentImages.microwave - 1];
      },
      coffeeMachineImage() {
        return this.images.coffeeMachine[this.currentImages.coffeeMachine - 1];
      },
      vacuumCleanerImage() {
        return this.images.vacuumCleaner[this.currentImages.vacuumCleaner - 1];
      },
    },
    methods: {
        toggleImage(product) {
            this.currentImages[product] = this.currentImages[product] === 1 ? 2 : 1;
    },
        arrowDirection(product) {
            return this.currentImages[product] === 1 ? this.arrowRight : this.arrowLeft;
    },
        buyForm(product) {
            this.$router.push({ name: 'FormView', params: { product: product } });
  },
},
  };
  </script>
  
  <style scoped>
  .product-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }
  
  .product {
    position: relative;
    width: 250px; 
    display: flex;
    flex-direction: column; 
    align-items: center;    
  }
  
  .product-image {
    width: 100%; 
    height: auto;
    display: block;
  }
  
  .arrow-button {
    position: absolute;
    top: 50%;
    right: 10px; 
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  
  .arrow {
    width: 30px; 
    height: 30px;
  }
  
  .buy-form {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    width: 50%;
    max-width: 100px; 
  }
  
  .buy-form:hover {
    background-color: #45a049;
  }
  </style>
  