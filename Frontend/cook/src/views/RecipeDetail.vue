<!-- src/views/RecipeDetail.vue -->
<template>
  <div class="container">
    <h2>Recipe Detail</h2>
    <div v-if="recipe">
      <h3>{{ recipe.title }}</h3>
      <img v-if="recipe.image" :src="recipe.image" class="img-fluid" alt="Recipe Image">
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
      </ul>
      <p><strong>Instructions:</strong></p>
      <p>{{ recipe.instructions }}</p>
      <p><strong>Cooking Time:</strong> {{ recipe.cookingTime }} minutes</p>
      <p><strong>Difficulty:</strong> {{ recipe.difficulty }}</p>
      <router-link :to="`/edit-recipe/${recipe._id}`" class="btn btn-primary">Edit Recipe</router-link>
    </div>
    <div v-else>
      <p>Loading recipe...</p>
    </div>
  </div>
</template>

<script>
import axios from '../axiosconfig';

export default {
  name: 'RecipeDetail',
  data() {
    return {
      recipe: null,
    };
  },
  async created() {
    const recipeId = this.$route.params.id;
    try {
      const response = await axios.get(`/recipes/${recipeId}`);
      if (response.data) {
        this.recipe = response.data;
      } else {
        console.error('No such document!');
      }
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  }
};
</script>
