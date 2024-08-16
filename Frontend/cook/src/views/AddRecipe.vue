<template>
  <div class="container">
    <span v-if="isAuthenticated" class="nav-link">{{ userEmail }}</span>
    <span v-if="!isAuthenticated" class="nav-link">uh oh</span>
    <h2>Add Recipe</h2>
    <form @submit.prevent="addRecipe">
      <div class="mb-3">
        
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="title" required>
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">Ingredients</label>
        <input type="text" class="form-control" id="ingredients" v-model="newIngredient" @keyup.enter="addIngredient">
        <button @click.prevent="addIngredient" class="btn btn-secondary mt-2">Add</button>
        <ul class="list-group mt-2">
          <li class="list-group-item" v-for="(ingredient, index) in ingredients" :key="index">
            {{ ingredient }}
            <button @click.prevent="removeIngredient(index)" class="btn btn-danger btn-sm float-end">Remove</button>
          </li>
        </ul>
      </div>
      <div class="mb-3">
        <label for="instructions" class="form-label">Instructions</label>
        <textarea class="form-control" id="instructions" v-model="instructions" required></textarea>
      </div>
      <div class="mb-3">
        <label for="cookingTime" class="form-label">Cooking Time</label>
        <input type="number" class="form-control" id="cookingTime" v-model="cookingTime" required>
      </div>
      <div class="mb-3">
        <label for="difficulty" class="form-label">Difficulty</label>
        <input type="text" class="form-control" id="difficulty" v-model="difficulty" required>
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Recipe Image</label>
        <input type="file" class="form-control" id="image" @change="onFileChange">
        <img v-if="imagePreview" :src="imagePreview" class="img-thumbnail mt-2" alt="Image Preview">
      </div>
      <button type="submit" class="btn btn-primary">Add Recipe</button>
    </form>
  </div>
</template>

<script>
import axios from '../axiosconfig';
import { auth } from '../firebase';

export default {
  name: 'AddRecipe',
  data() {
    return {
      title: '',
      ingredients: [],
      newIngredient: '',
      instructions: '',
      cookingTime: 0,
      difficulty: '',
      image: null,
      imagePreview: null, // To show image preview
      isAuthenticated: false, // Track if user is authenticated
      userEmail: '', // Store the user's email
    };
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.userEmail = user.email;
      } else {
        this.isAuthenticated = false;
      }
    });
  },
  methods: {
    addIngredient() {
      if (this.newIngredient) {
        this.ingredients.push(this.newIngredient);
        this.newIngredient = '';
      }
    },
    removeIngredient(index) {
      this.ingredients.splice(index, 1);
    },
    onFileChange(event) {
      const file = event.target.files[0];
      this.image = file;
      this.imagePreview = URL.createObjectURL(file); // Create a URL for the image preview
    },
    async addRecipe() {
      try {
        const token = await auth.currentUser.getIdToken(true);

        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('ingredients', JSON.stringify(this.ingredients));
        formData.append('instructions', this.instructions);
        formData.append('cookingTime', this.cookingTime);
        formData.append('difficulty', this.difficulty);
        formData.append('userId', auth.currentUser.uid); // Include userId
        if (this.image) {
          formData.append('image', this.image); // Append the image file to the form data
        }

        await axios.post('/recipes', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });

        this.$router.push('/recipes');
      } catch (error) {
        console.error('Error adding recipe:', error);
      }
    }
  }
};
</script>