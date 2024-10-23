<template>
        <div>
    <h1>Beskrivning:</h1>
    <p>På denna sida ville jag skapa en grund för en databas. Som kan ses i bilden "Database.cs" så är databasen länkad till SQL. <br>
    Jag har huvudsakligen använt mig av SQL och MongoDB. Jag ville också inkludera full funktionalitet på hemsidan, så att varje inlägg kan redigeras och tas bort.<br></p>
  </div>
    <div class="blog-view">
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
          { title: "Index", src: "/Blog1.PNG" },
          { title: "Edit", src: "/Blog2.PNG" },
          { title: "Details", src: "/Blog3.PNG" },
          { title: "Delete", src: "/Blog4.PNG" }
        ],
        codeImages: [
          { title: "Database.cs", src: "/Blog5.PNG" },
          { title: "Database.cs", src: "/Blog6.PNG" },
          { title: "Blog.cs", src: "/Blog7.PNG" },
          { title: "Show.cshtml", src: "/Blog8.PNG" },
          { title: "Index.cshtml", src: "/Blog9.PNG" },
          { title: "Edit.cshtml", src: "/Blog10.PNG" },
          { title: "Delete.cshtml", src: "/Blog11.PNG" },
          { title: "Create.cshtml", src: "/Blog12.PNG" },
          { title: "BlogController.cs", src: "/Blog13.PNG" },
          { title: "BlogController.cs", src: "/Blog14.PNG" }
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
  .blog-view {
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
  