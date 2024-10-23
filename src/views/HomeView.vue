<template>
  <div class="home">
    <div class="profile">
    <img alt="bild på mig" src="../assets/img2.jpg">
  </div>
    <HelloWorld msg="Välkommen till min portfölj"/>
  </div>
</template>


// För smidigare kodning, en vy som länkar till de olika projekten (via route)
// Text för varje projekt som förklarar lärdomar och sättet jag kodade
// Ta bort ordet projekt för varje sak

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.profile img {
  display: block;
  margin: 0 auto;
  max-width: 150px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #ccc;
}
</style>

