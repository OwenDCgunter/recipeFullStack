<!-- src/views/RecipeList.vue -->
<template>
  <div class="container">
    <header class="d-flex justify-content-between align-items-center py-3">
      <h1>Recipe App</h1>
      <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/recipes" class="nav-link">Recipes</router-link>
        <router-link to="/add-recipe" class="nav-link">Add Recipe</router-link>
        <router-link to="/favorites" class="nav-link">Favorites</router-link>
      </nav>
    </header>
    <main>
      <h2>Recipe List</h2>
      <div class="row">
        <div class="col-md-4" v-for="recipe in recipes" :key="recipe._id">
          <div class="card mb-4">
            <img v-if="recipe.image" :src="recipe.image" class="card-img-top" alt="Recipe Image">
            <img v-else src="path/to/default/image.jpg" class="card-img-top" alt="Default Image">
            <div class="card-body">
              <h5 class="card-title">{{ recipe.title }}</h5>
              <p class="card-text">{{ recipe.description }}</p>
              <router-link :to="`/recipes/${recipe._id}`" class="btn btn-primary">View Recipe</router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="py-3 text-center">
      <p>Contact us: info@recipeapp.com</p>
      <p>Follow us on social media: [links]</p>
    </footer>
  </div>
</template>

<script>
// Ensure the correct path to axiosconfig
import axios from '../axiosconfig';

export default {
  name: 'RecipeList',
  data() {
    return {
      recipes: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('/recipes'); // Use relative URL
      this.recipes = response.data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  },
};
</script>
