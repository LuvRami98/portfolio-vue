<template>
  <div class="recipe-container">
    <div class="recipe-box">
      <h2>All Recipes</h2>

      <div v-for="recipe in recipes" :key="recipe.id" class="section-box">
        <h3>{{ recipe.title }}</h3>
        <p>{{ recipe.instruction }}</p>
        <div class="button-container">
          <router-link :to="'/recipe/' + recipe.id + '/edit'" class="button">Edit</router-link>
          <router-link :to="'/recipe/' + recipe.id + '/delete'" class="button">Delete</router-link>
        </div>
      </div>

      <div class="page-container">
        <router-link to="/recipe" class="button">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    async fetchRecipes() {
      try {
        const response = await fetch("http://localhost:27307/api/Recipe");
        const data = await response.json();
        this.recipes = data;
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    }
  },
  created() {
    this.fetchRecipes();
  }
};
</script>

<style scoped>
.recipe-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px; 
}

.recipe-box {
  background-color: #f5e6c8;
  padding: 30px;
  width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
}

.section-box {
  margin: 20px 0;
  padding: 10px;
  background-color: #fff; 
  border-bottom: 1px solid #ddd;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 15px; 
  margin-top: 10px;
}

.button {
  display: inline-block;
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
}

.button:hover {
  background-color: #45a049;
}

.page-container {
  text-align: center;
  margin-top: 20px;
}
</style>
