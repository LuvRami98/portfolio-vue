<template>
  <div class="recipe-container">
    <div class="recipe-box">
      <h2>Welcome</h2>

      <div v-for="recipe in recipes" :key="recipe.id" class="section-box">
        <h3>{{ recipe.title }}</h3>
        <p>{{ recipe.instruction }}</p>
      </div>

      <div class="button-container">
        <router-link to="/recipe/create" class="button">Create</router-link>
        <router-link to="/recipe/:id/show" class="button">Show All</router-link>
      </div>
    </div>

    <div class="code-link-container">
      <router-link to="/recipe/code" class="code-button">See the code</router-link>
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
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
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
  flex-direction: column;
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
  border-bottom: 1px solid #ddd;
  background-color: #fff; 
}

.button-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
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

.code-link-container {
  margin-top: 20px;
  padding: 15px;
  background-color: #f5e6c8;
  width: 600px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.code-button {
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

.code-button:hover {
  background-color: #45a049;
}
</style>
