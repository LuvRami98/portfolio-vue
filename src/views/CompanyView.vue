<template>
      <div>
    <h1>Beskrivning:</h1>
    <p>Här ville jag återskapa en variant av ett intranät. Det som var väldigt viktigt för mig var hur information matades in.<br>
    Jag ville att viss information inte skulle kunna redigeras via hemsidan. Det börjar med att profilen skapas i terminalen, se bild "Terminal".<br>
    Efter detta kan enbart kontaktinfo redigeras på hemsidan, se bilden "Edit". All information finns dock tillgänglig på hemsidan, se bilden "Details". <br>
    Det svåra med detta projekt var att lista ut hur samma profil ska redigeras och skapas på två olika sätt. <br>
    Först försökte jag länka två informationsbitar till en profil, men jag insåg att det är lättare att redigera samma ID.</p>
  </div>
    <div class="company-view">
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
          { title: "Company", src: "/Company3.PNG" },
          { title: "Company Admin", src: "/Company4.PNG" },
          { title: "Edit", src: "/Company5.PNG" },
          { title: "Details", src: "/Company6.PNG" },
          { title: "Kontakta oss", src: "/Company7.PNG" }
        ],
        codeImages: [
          { title: "Program.cs", src: "/Company1.PNG" },
          { title: "Terminal", src: "/Company2.PNG" },
          { title: "CompanyDatabase.cs", src: "/Company8.PNG" },
          { title: "Employee.cs", src: "/Company9.PNG" },
          { title: "EmployeeDatabase.cs", src: "/Company10.PNG" },
          { title: "index.cshtml", src: "/Company11.PNG" },
          { title: "Edit.cshtml", src: "/Company12.PNG" },
          { title: "Delete.cshtml", src: "/Company13.PNG" },
          { title: "Create.cshtml", src: "/Company14.PNG" },
          { title: "Index.cshtml", src: "/Company15.PNG" },
          { title: "Details.cshtml", src: "/Company16.PNG" },
          { title: "EmployeeController.cs", src: "/Company17.PNG" },
          { title: "EmployeeController.cs", src: "/Company18.PNG" },
          { title: "CompanyController.cs", src: "/Company19.PNG" },
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
  .company-view {
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
  