<template>
  <div class="recipe-container">
    <div class="recipe-box">
      <h2>Delete Recipe</h2>

      <div class="section-box">
        <p>Are you sure you want to delete the recipe titled "{{ recipe.title }}"?</p>
        <button @click="deleteRecipe" class="button">Yes, delete it</button>
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
      recipe: {}
    };
  },
  methods: {
    async fetchRecipe() {
      try {
        const response = await fetch(`http://localhost:27307/api/Recipe/${this.$route.params.id}`);
        const data = await response.json();
        this.recipe = data;
      } catch (error) {
        console.error("Failed to fetch recipe:", error);
      }
    },
    async deleteRecipe() {
      try {
        await fetch(`http://localhost:27307/api/Recipe/${this.$route.params.id}`, {
          method: "DELETE"
        });
        this.$router.push('/recipe');
      } catch (error) {
        console.error("Failed to delete recipe:", error);
      }
    }
  },
  created() {
    this.fetchRecipe();
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
}

.recipe-box {
  background-color: #f5e6c8;
  padding: 20px;
  width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.section-box {
  margin-bottom: 15px;
}

button,
.router-link {
  display: inline-block;
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
}

button:hover,
.router-link:hover {
  background-color: #45a049;
}

.page-container {
  text-align: center;
  margin-top: 20px;
}
</style>
