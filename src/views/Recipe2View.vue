<template>
  <div class="recipe-container">
    <div class="recipe-box">
      <h2>Create a New Recipe</h2>

      <form @submit.prevent="createRecipe">
        <div class="section-box">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" required />
        </div>

        <div class="section-box">
          <label for="instruction">Instruction:</label>
          <textarea id="instruction" v-model="instruction" required></textarea>
        </div>

        <button type="submit" class="button">Create</button>
      </form>

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
      title: '',
      instruction: ''
    };
  },
  methods: {
    async createRecipe() {
      if (this.title.trim() !== "" && this.instruction.trim() !== "") {
        const newRecipe = {
          title: this.title,
          instruction: this.instruction,
        };

        try {
          const response = await fetch("http://localhost:27307/api/Recipe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipe),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          this.$router.push('/recipe');
        } catch (error) {
          console.error("Failed to create recipe:", error);
        }
      }
    }
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
