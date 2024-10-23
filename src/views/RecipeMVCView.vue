<template>
  <div>
    <h1>Beskrivning:</h1>
    <p>Detta projekt gick ut på att skapa en hemsida för olika recept.<br>
    Som kan ses i bilden "Database.cs" så var hemsidan kopplad till SQL.</p>
  </div>
    <div class="recipemvc-view">
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
          { title: "Homepage", src: "/Recept1.PNG" },
          { title: "Recipe 1", src: "/Recept2.PNG" },
          { title: "Recipe 2", src: "/Recept3.PNG" }
        ],
        codeImages: [
          { title: "Database.cs", src: "/Recept4.PNG" },
          { title: "Recipe.cs", src: "/Recept5.PNG" },
          { title: "Index.cshtml", src: "/Recept6.PNG" },
          { title: "Index.cshtml", src: "/Recept7.PNG" },
          { title: "Recipe.cs", src: "/Recept8.PNG" },
          { title: "PastaController.cs", src: "/Recept9.PNG" },
          { title: "FattigariddareController.cs", src: "/Recept10.PNG" },
          { title: "site.css", src: "/Recept11.PNG" }
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
  .recipemvc-view {
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
  