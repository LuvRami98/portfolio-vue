<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Jag har alltid haft ett starkt intresse för teknik, vilket ledde mig till att utbilda mig till fullstackutvecklare.  <br>
      Tidigare har jag arbetat med analys inom riskhantering och har en bakgrund inom ekonomi, 
      men det är de tekniska aspekterna av mina roller som har engagerat mig mest. <br>
      Nuu ser fram emot att fördjupa mina kunskaper som fullstackutvecklare och bidra till att skapa innovativa och effektiva system. <br>
      <router-link to="/about3">Mer information</router-link>
    </p>
    <h3>Vue Projekt</h3>
    <ul>
      <li><router-link to="/todo">To-Do</router-link></li>
      <li><router-link to="/blogs">Bloggar</router-link></li>
      <li><router-link to="/books">Bibliotek</router-link></li>
      <li><router-link to="/store">Affärshemsida</router-link></li>
      <li><router-link to="/recipe">Recept</router-link></li>
    </ul>
    <h3>MVC Projekt</h3>
    <ul>
      <li><router-link to="/recipemvc">Recept</router-link></li>
      <li><router-link to="/tictactoe">Tre-i-rad</router-link></li>
      <li><router-link to="/company">Företagsportal</router-link></li>
      <li><router-link to="/exercise">Träningsportal</router-link></li>
      <li><router-link to="/blog">Bloggar</router-link></li>
    </ul>
  </div>
</template>

<script>
import AboutView from '@/views/AboutView.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
