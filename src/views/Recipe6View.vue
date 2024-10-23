<template>
  <h1>The node.js code that the Recipe app is based on:</h1>
  <div class="recipe6-view">
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
      codeImages: [
        { title: "main.hbs", src: "/Node1.PNG" },
        { title: "create.hbs", src: "/Node2.PNG" },
        { title: "delete.hbs", src: "/Node3.PNG" },
        { title: "edit.hbs", src: "/Node4.PNG" },
        { title: "home.hbs", src: "/Node5.PNG" },
        { title: "show.hbs", src: "/Node6.PNG" },
        { title: "index.js", src: "/Node7.PNG" },
        { title: "index.js", src: "/Node8.PNG" },
        { title: "index.js", src: "/Node9.PNG" }
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
.recipe6-view {
  padding: 20px;
  text-align: center;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
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
