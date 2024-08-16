<!-- src/views/EditRecipe.vue -->
<template>
  <div class="container">
    <span v-if="isAuthenticated" class="nav-link">{{ userEmail }}</span>
    <span v-if="!isAuthenticated" class="nav-link">uh oh</span>
    <h2>Edit Recipe</h2>
    <form @submit.prevent="editRecipe">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="recipe.title" required>
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">Ingredients</label>
        <input type="text" class="form-control" id="ingredients" v-model="newIngredient" @keyup.enter="addIngredient">
        <button @click.prevent="addIngredient" class="btn btn-secondary mt-2">Add</button>
        <ul class="list-group mt-2">
          <li class="list-group-item" v-for="(ingredient, index) in recipe.ingredients" :key="index">
            {{ ingredient }}
            <button @click.prevent="removeIngredient(index)" class="btn btn-danger btn-sm float-end">Remove</button>
          </li>
        </ul>
      </div>
      <div class="mb-3">
        <label for="instructions" class="form-label">Instructions</label>
        <textarea class="form-control" id="instructions" v-model="recipe.instructions" required></textarea>
      </div>
      <div class="mb-3">
        <label for="cookingTime" class="form-label">Cooking Time</label>
        <input type="number" class="form-control" id="cookingTime" v-model="recipe.cookingTime" required>
      </div>
      <div class="mb-3">
        <label for="difficulty" class="form-label">Difficulty</label>
        <input type="text" class="form-control" id="difficulty" v-model="recipe.difficulty" required>
      </div>
      <button type="submit" class="btn btn-primary">Update Recipe</button>
      <button @click.prevent="deleteRecipe" class="btn btn-danger float-end">Delete Recipe</button>
    </form>
  </div>
</template>

<script>
import axios from '../axiosconfig';

export default {
  name: 'EditRecipe',
  data() {
    return {
      recipe: {
        title: '',
        ingredients: [],
        instructions: '',
        cookingTime: 0,
        difficulty: '',
      },
      newIngredient: '',
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
  },
  methods: {
    addIngredient() {
      if (this.newIngredient) {
        this.recipe.ingredients.push(this.newIngredient);
        this.newIngredient = '';
      }
    },
    removeIngredient(index) {
      this.recipe.ingredients.splice(index, 1);
    },
    async editRecipe() {
      try {
        const recipeId = this.$route.params.id;
        await axios.put(`/recipes/${recipeId}`, this.recipe);
        this.$router.push('/recipes');
      } catch (error) {
        console.error('Error updating recipe:', error);
      }
    },
    async deleteRecipe() {
      try {
        const recipeId = this.$route.params.id;
        await axios.delete(`/recipes/${recipeId}`);
        this.$router.push('/recipes');
      } catch (error) {
        console.error('Error deleting recipe:', error);
      }
    },
  },
};
</script>
