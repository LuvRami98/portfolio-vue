<template>
    <div>
    <h1>Beskrivning:</h1>
    <p>I detta projekt återskapade jag spelet tre-i-rad, eller Tic Tac Toe. Det går ut på att två olika spelare har två olika pjäser som de ska försöka få tre i rad av.<br>
    Den mest komplicerade delen av detta projekt var javascript-delen, som kan ses i bilden "site.js". <br>
    Utöver detta var det även svårt att lista ut hur jag skulle få lagringen att fungera, så att varje drag sparas. <br>
    Att byta spelare på ett smidigt sätt var utmanande och blev även det löst med javascript.</p>
  </div>
    <div class="tictactoe-view">
      <h1>Website Preview</h1>
      <div class="image-gallery">
        <div class="image-box" v-for="(image, index) in websiteImages" :key="index">
          <img :src="image.src" :alt="image.title" class="zoomable" @click="openImage(image.src)" />
          <h2>{{ image.title }}</h2>
        </div>
      </div>
  
      <h1>Code Preview</h1>
      <div class="image-gallery">
        <div class="image-box" v-for="(image, index) in codeImages" :key="index">
          <img :src="image.src" :alt="image.title" class="zoomable" @click="openImage(image.src)" />
          <h2>{{ image.title }}</h2>
        </div>
      </div>
  
      <div v-if="isZoomed" class="image-modal" @click="closeImage">
        <img :src="currentImage" alt="Zoomed Image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isZoomed: false,
        currentImage: null,
        websiteImages: [
          { title: "First move", src: "/Tictactoe1.PNG" },
          { title: "Second move", src: "/Tictactoe2.PNG" },
          { title: "Third move", src: "/Tictactoe3.PNG" }
        ],
        codeImages: [
          { title: "Database.cs", src: "/Tictactoe4.PNG" },
          { title: "DatabaseTwo.cs", src: "/Tictactoe5.PNG" },
          { title: "Index.cshtml", src: "/Tictactoe6.PNG" },
          { title: "PlayRequest.cshtml", src: "/Tictactoe7.PNG" },
          { title: "Player2.cs", src: "/Tictactoe8.PNG" },
          { title: "Player1.cs", src: "/Tictactoe9.PNG" },
          { title: "TicTacToeController.cs", src: "/Tictactoe10.PNG" },
          { title: "site.js", src: "/Tictactoe11.PNG" },
          { title: "site.css", src: "/Tictactoe12.PNG" },
          { title: "site.css", src: "/Tictactoe13.PNG" }
        ]
      };
    },
    methods: {
      openImage(imageSrc) {
        this.isZoomed = true;
        this.currentImage = imageSrc;
      },
      closeImage() {
        this.isZoomed = false;
        this.currentImage = null;
      }
    }
  };
  </script>
  
  <style scoped>
  .tictactoe-view {
    padding: 20px;
    text-align: center;
  }
  
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .image-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .image-box img {
    max-width: 300px;
    cursor: zoom-in;
  }
  
  .image-box h2 {
    margin-top: 10px;
  }
  
  .zoomable {
    transition: transform 0.2s ease;
  }
  
  .zoomable:hover {
    transform: scale(1.05);
  }
  
  .image-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .image-modal img {
    max-width: 80%;
    max-height: 80%;
    border-radius: 10px;
  }

  .image-box h2 {
  font-size: 15px; 
  font-family: 'Arial', sans-serif; 
  font-weight: bold; 
  text-align: center; 
}

  </style>
  